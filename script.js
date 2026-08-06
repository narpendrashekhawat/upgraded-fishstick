const signInPage =
document.getElementById("signinPage");
const signUpPage =
document.getElementById("signupPage");
const signInTab = 
document.getElementById("signInTab");
const createAccountTab = 
document.getElementById("createAccountTab");

createAccountTab.addEventListener("click", () => {
    signInPage.classList.add("hidden");
    signUpPage.classList.remove("hidden");

    createAccountTab.classList.add("on");
    signInTab.classList.remove("on");
});

signInTab.addEventListener("click",() => {
    signUpPage.classList.add("hidden");
    signInPage.classList.remove("hidden");
    signInTab.classList.add("on");
    createAccountTab.classList.remove("on");
});
