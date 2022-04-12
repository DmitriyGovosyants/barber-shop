const formRef = document.querySelector('.online-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const { elements: { name, phone }} = e.currentTarget;
    if (name.value === "" || phone.value === "") {
        alert('Please, fill in all fields!');
    } else {
        const formData = new FormData(e.currentTarget);
        const loginFormData = {};

        formData.forEach((value, name) => {
            loginFormData[name] = value;
        });
        
        console.log(loginFormData);
    }

    e.currentTarget.reset();
}

   