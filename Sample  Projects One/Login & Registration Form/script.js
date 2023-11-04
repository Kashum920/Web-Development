const container = document.querySelector('.container');
const pwShowHide = document.querySelectorAll('.showHidePw');
const pwFileds = document.querySelectorAll('.password');
const signUp = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFileds.forEach(pwFiled => {
            if(pwFiled.type === "password"){
                pwFiled.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            }
            else{
                pwFiled.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});


signUp.addEventListener("click", () => {
    container.classList.add('active');
});

login.addEventListener("click", () => {
    container.classList.remove('active');
})