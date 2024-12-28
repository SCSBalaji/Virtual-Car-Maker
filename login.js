let userName = document.querySelector("#name");
let password = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if(isNaN(userName) || userName == ""){
        alert("Please enter valid username");
    } else if(isNaN(password) || password == ""){
        alert("Please enter valid password");
    }
    alert("Your login was successfull");
});
