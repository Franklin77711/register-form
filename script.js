const pass = document.getElementById("password");
const passC = document.getElementById("password-confirm");
const passErr = document.querySelector(".pass-error");
const submitBtn = document.querySelector(".button");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById("email");
const tel = document.getElementById("phone-number");
const form = document.getElementById("form");




passC.addEventListener("input", function (event) {
    if (passC.value !== pass.value) {
      passErr.style.visibility="visible";
      passC.style.borderColor = "red";
    }else{
        passErr.style.visibility="hidden";
        passC.style.borderColor = "green";
    }
});

submitBtn.addEventListener("click", function(aler){
form.onsubmit = alert("Account created");
});
