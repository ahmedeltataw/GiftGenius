let LoginBtn = document.getElementById("Login") as HTMLButtonElement;
let Register = document.getElementById("Register") as HTMLButtonElement;
let toggleLeft = document.querySelector(".toggleLeft") as HTMLDivElement;
let toggleRight = document.querySelector(".toggleRight") as HTMLDivElement;
let togglePanel = document.querySelector(".toggle") as HTMLDivElement;
let container = document.getElementById("container") as HTMLDivElement;
// this variable to responsive
let signUpBtn = document.querySelector('.changeResponsive .signUpBtn') as HTMLButtonElement;
let signInBtn = document.querySelector('.changeResponsive .signInBtn') as HTMLButtonElement;
let signIn = document.querySelector(".slideAuth .signIn") as HTMLDivElement;
let signUp = document.querySelector(".slideAuth .signUp") as HTMLDivElement;
//
toggleRight.style.display = 'none'
let handelAuth = (show: boolean) => {
    togglePanel.classList.toggle("active", show)
    container.classList.toggle("active", show)
    toggleRight.classList.toggle("active", show)
    toggleLeft.classList.toggle("active", !show)
    toggleLeft.style.opacity = show ? '0' : '1'
    toggleRight.style.opacity = show ? '1' : '0'

    setTimeout(() => {
        toggleLeft.style.display = show ? 'none' : '';
        toggleRight.style.display = show ? '' : 'none';
    }, 500);
}
LoginBtn.addEventListener('click', () => handelAuth(true))
Register.addEventListener('click', () => handelAuth(false))

//this code responsive
let handelResponsiveAuth = (show: boolean) => {
    signUp.classList.toggle("active", !show);
    signIn.classList.toggle("active", show);

    setTimeout(() => {
        signUp.style.display = show ? 'none' : '';
        signIn.style.display = show ? '' : 'none';
    }, 500)

}
signUpBtn.addEventListener("click", () => handelResponsiveAuth(true));
signInBtn.addEventListener("click", () => handelResponsiveAuth(false));
let resizeWidth = () => {
    const windowWidth = window.innerWidth;
    signIn.style.display = windowWidth >= 580 ? '' : 'none';
    windowWidth > 580 ? signUp.classList.remove("active") : signUp.classList.add("active");
    // signUp.classList.add("active" )
}
resizeWidth()
window.addEventListener("resize", resizeWidth)



let correctHost=()=>{
    if (window.location.hash === "#SignIn"){
        handelAuth(true)
    } else{
        handelAuth(false)
    }
}
correctHost()
window.addEventListener("hashchange", correctHost);
