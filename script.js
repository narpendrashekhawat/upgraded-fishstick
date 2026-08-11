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

// Add this below your existing tab-switching logic in script.js

// 1. Target the specific elements for the login form
const emailInput = document.getElementById("emailInput"); 
const passwordInput = document.getElementById("passwordInput");
const signInSubmitBtn = document.getElementById("signInSubmitBtn"); 

// 2. Add an event listener to handle the sign-in button click
signInSubmitBtn.addEventListener("click", (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // 3. Get the values entered by the user
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value;

    // 4. Validate against the required credentials
    if (enteredEmail === "admin@gosource.ai" && enteredPassword === "Admin123!") {
        alert("Login successful! Redirecting to CIQ...");
        
        // Add your redirection code here, for example:
        // window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid email or password. Please try again.");
        
        // Clear the password field on failure
        passwordInput.value = "";
    }
});