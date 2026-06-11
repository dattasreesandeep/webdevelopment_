

/*
=========================================================
PROJECT: Bank Account Registration Form

DESCRIPTION:
This project simulates a bank account registration system.
Users can enter their personal details to create a bank account.

OBJECTIVE:
Validate user inputs before account creation and provide
clear error messages when invalid data is entered.

FEATURES:
1. Full Name validation
2. Email validation
3. Phone number validation
4. Age verification (18 years and above)
5. Gender selection validation
6. Account type validation
7. Username validation
8. Password strength validation
9. Confirm password matching
10. Show/Hide password functionality

TECHNOLOGIES USED:
- HTML
- CSS
- JavaScript
=========================================================
*/

const form = document.getElementById("bankForm");


// NAME VALIDATION

function validateName(){

    let name = document.getElementById("name").value.trim();

    let error = document.getElementById("nameError");

    if(name === ""){

        error.innerText = "Name cannot be empty";

        return false;
    }

    if(name.length < 3){

        error.innerText =
        "Minimum 3 characters required";

        return false;
    }

    if(!/^[A-Za-z ]+$/.test(name)){

        error.innerText =
        "Only alphabets allowed";

        return false;
    }

    error.innerText = "";

    return true;
}



// EMAIL VALIDATION

function validateEmail(){

    let email =
    document.getElementById("email").value.trim();

    let error =
    document.getElementById("emailError");

    let pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){

        error.innerText =
        "Invalid Email";

        return false;
    }

    error.innerText = "";

    return true;
}



// PHONE VALIDATION

function validatePhone(){

    let phone =
    document.getElementById("phone").value.trim();

    let error =
    document.getElementById("phoneError");

    if(!/^[0-9]{10}$/.test(phone)){

        error.innerText =
        "Enter valid 10 digit number";

        return false;
    }

    error.innerText = "";

    return true;
}



// DOB VALIDATION

function validateDOB(){

    let dob =
    document.getElementById("dob").value;

    let error =
    document.getElementById("dobError");

    let birthYear =
    new Date(dob).getFullYear();

    let currentYear =
    new Date().getFullYear();

    let age = currentYear - birthYear;

    if(age < 18){

        error.innerText =
        "Age must be 18+";

        return false;
    }

    error.innerText = "";

    return true;
}



// GENDER VALIDATION

function validateGender(){

    let gender =
    document.getElementById("gender").value;

    let error =
    document.getElementById("genderError");

    if(gender === ""){

        error.innerText =
        "Select gender";

        return false;
    }

    error.innerText = "";

    return true;
}



// ACCOUNT VALIDATION

function validateAccount(){

    let account =
    document.getElementById("accountType").value;

    let error =
    document.getElementById("accountError");

    if(account === ""){

        error.innerText =
        "Select account type";

        return false;
    }

    error.innerText = "";

    return true;
}



// USERNAME VALIDATION

function validateUsername(){

    let username =
    document.getElementById("username").value.trim();

    let error =
    document.getElementById("usernameError");

    if(username.includes(" ")){

        error.innerText =
        "Spaces are not allowed";

        return false;
    }

    if(username.length < 4){

        error.innerText =
        "Username too short";

        return false;
    }

    error.innerText = "";

    return true;
}



// PASSWORD VALIDATION

function validatePassword(){

    let password =
    document.getElementById("password").value;

    let error =
    document.getElementById("passwordError");

    let pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(!pattern.test(password)){

        error.innerText =
        "Invalid Password Format";

        return false;
    }

    error.innerText = "";

    return true;
}



// CONFIRM PASSWORD VALIDATION

function validateConfirmPassword(){

    let password =
    document.getElementById("password").value;

    let confirm =
    document.getElementById("confirmPassword").value;

    let error =
    document.getElementById("confirmError");

    if(password !== confirm){

        error.innerText =
        "Passwords do not match";

        return false;
    }

    error.innerText = "";

    return true;
}




// REAL TIME VALIDATION

document.getElementById("name")
.addEventListener("input", validateName);

document.getElementById("email")
.addEventListener("input", validateEmail);

document.getElementById("phone")
.addEventListener("input", validatePhone);

document.getElementById("dob")
.addEventListener("input", validateDOB);

document.getElementById("gender")
.addEventListener("change", validateGender);

document.getElementById("accountType")
.addEventListener("change", validateAccount);

document.getElementById("username")
.addEventListener("input", validateUsername);

document.getElementById("password")
.addEventListener("input", validatePassword);

document.getElementById("confirmPassword")
.addEventListener("input", validateConfirmPassword);




// FORM SUBMIT

form.addEventListener("submit", function(event){

    event.preventDefault();

    let valid =

    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateDOB() &&
    validateGender() &&
    validateAccount() &&
    validateUsername() &&
    validatePassword() &&
    validateConfirmPassword();

    if(valid){

        alert("Account Created Successfully");

        form.reset();
    }

});




// SHOW / HIDE PASSWORD

document.getElementById("togglePassword")
.addEventListener("click", function(){

    let password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";

        this.innerText = "Hide";
    }

    else{

        password.type = "password";

        this.innerText = "Show";
    }

});