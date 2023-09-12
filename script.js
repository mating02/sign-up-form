document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');

    inputs.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            if (!inputElement.checkValidity() && inputElement.value.trim() !== "") {
                inputElement.style.borderBottom = "1px solid red";
            } 
            if(inputElement.checkValidity()){
                inputElement.style.borderBottom = "1px solid rgb(74, 222, 128)";
            }
    });
});
    const pwText = document.getElementById('identicPw');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirmPassword');

    password.addEventListener("input", () => {
        if(password.value !== confirm.value){
            pwText.innerText = '*Passwords do not match';
            pwText.style.color = 'red';
            pwText.style.fontSize='.8rem';
            confirm.style.borderBottom = "1px solid red";
            password.style.borderBottom = "1px solid red";
            confirm.setCustomValidity('Passwords do not match');
        }
        else {
            pwText.innerText = ''; // Clear the error message if passwords match
            confirm.style.borderBottom = "1px solid rgb(74, 222, 128)";
            password.style.borderBottom = "1px solid rgb(74, 222, 128)";
            confirm.setCustomValidity('');
        }
    });

    confirm.addEventListener("input", () => {
        if(password.value !== confirm.value){
            pwText.innerText = '*Passwords do not match';
            pwText.style.color = 'red';
            pwText.style.fontSize='.8rem';
            confirm.style.borderBottom = "1px solid red";
            password.style.borderBottom = "1px solid red";
            confirm.setCustomValidity('Passwords do not match');
        }
        else {
            pwText.innerText = ''; // Clear the error message if passwords match
            confirm.style.borderBottom = "1px solid rgb(74, 222, 128)";
            password.style.borderBottom = "1px solid rgb(74, 222, 128)";
            confirm.setCustomValidity('');
        }
    });
    
});
