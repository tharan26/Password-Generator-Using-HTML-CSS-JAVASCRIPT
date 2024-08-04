function generate(){
    let mail=document.getElementById("email");
    let pass=document.getElementById("password");
    let email=mail.value;
    let password=pass.value;

    if(email===""){
        alert("Enter your Email");
    }
    else if(password===""){
        alert("Enter the password");
    }
    else{
        alert("You are now a Member");
        mail.value="";
        pass.value="";
    }
}

function showGenerator(){
    if(confirm("Generate a Strong Password?")){
        generatePassword();
    }
}

function generatePassword(){
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for(let i=0;i<8;i++){
        let random=Math.floor(Math.random() * charset.length);
        password = password + charset[random];
    }

    document.getElementById("password").value = password;
}

function togglePasswordVisibility() {
    let pass = document.getElementById("password");
    let toggleIcon = document.getElementById("togglePassword");

    if (pass.type === "password") {
        pass.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        pass.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}