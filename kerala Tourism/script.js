const togglePassword = document.querySelector("#togglePassword");
const togglePassword1 = document.querySelector("#togglePassword1");

const password = document.querySelector("#pwd");
const password1 = document.querySelector("#pwd1");


  togglePassword.addEventListener("click", function () {
// toggle the type attribute
const type = password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);

// toggle the icon
this.classList.toggle("bi-eye");
});
togglePassword1.addEventListener("click", function () {
// toggle the type attribute
const type = password1.getAttribute("type") === "password" ? "text" : "password";
password1.setAttribute("type", type);

// toggle the icon
this.classList.toggle("bi-eye");
});



function validate(){
var uname = document.getElementById('uname').value;
var email = document.getElementById("email").value;
var pwd = document.getElementById("pwd").value;
var pwd1 = document.getElementById("pwd1").value;
var num = document.getElementById("num").value;


if(uname == ""){
document.getElementById('unamerror').innerHTML = "Please fill the username";
unamerror.style.color = "red";
 return false;
}
if((uname.length <=2) || (uname.length > 20)){
document.getElementById('unamerror').innerHTML = "Please fill username length between 2 nd 20";
unamerror.style.color = "red";
 return false;
}
if(!isNaN(uname)){
document.getElementById('unamerror').innerHTML = "Only characters are allowed";
unamerror.style.color = "red";
 return false;
}

if(email == ""){
document.getElementById('error').innerHTML = "Please fill the email";
error.style.color = "red";
 return false;
}
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
if(!regexp.test(email)){
error.innerHTML = "Please Enter Valid Email Address";
error.style.color = "red";
return false;
}
//   if(email.indexOf('@') <= 0){
//     document.getElementById('error').innerHTML = "Please fill the crct email";
//       error.style.color = "red";
//        return false;
//   }
//   if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) { 
//     document.getElementById('error').innerHTML = "Please fill the crct email";
//       error.style.color = "red";
//        return false;     
//  }


if(pwd == ""){
document.getElementById('error2').innerHTML = "Please fill the strong Password";
error2.style.color = "red";
 return false;
}
if((pwd.length <=8)){
document.getElementById('error2').innerHTML = "Minimum 8 characters";
error2.style.color = "red";
 return false;
}
let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(!regpwd.test(pwd)){
error2.innerHTML = "Please Enter Valid Password";
error2.style.color = "red";
return false;
}




if(pwd1 == ""){
document.getElementById('error3').innerHTML = "Please fill the Re-Type Password";
error3.style.color = "red";
 return false;
}
if(pwd!=pwd1){
document.getElementById('pwd1').innerHTML = "Password are not maching";
error3.style.color = "red";
 return false;
}
let regpwd1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(!regpwd1.test(pwd1)){
error3.innerHTML = "Please Enter Valid Password";
error3.style.color = "red";
return false;
}

if(num == ""){
document.getElementById('error4').innerHTML = "Please fill the Phone number";
error4.style.color = "red";
 return false;
}


let regnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(!regnum.test(num)){
error4.innerHTML = "Please enter valid Phone number";
error4.style.color = "red";
return false;
}
if(isNaN(num)){
document.getElementById('error4').innerHTML = "Please enter digits only";
error4.style.color = "red";
 return false;
}
if(num.length!=10){
document.getElementById('error4').innerHTML = "Only enter 10 digits num only";
error4.style.color = "red";
 return false;
}
}


































// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#pwd");

// togglePassword.addEventListener("click", function () {
//     // toggle the type attribute
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
    
//     // toggle the icon
//     this.classList.toggle("bi-eye");
// });

// function validate(){
//     var name = document.forms.SignUpForm.name.value;
//     var email = document.forms.SignUpForm.email;
//     var error = document.forms.SignUpForm.error;
//     var pwd = document.forms.SignUpForm.pwd.value;
//     var error2 = document.forms.SignUpForm.error2;
//     var pwd1 = document.forms.SignUpForm.pwd1.value;
//     var error3 = document.forms.SignUpForm.error3;
//     var num = document.forms.SignUpForm.num.value;
//     var error4 = document.forms.SignUpForm.error4;

   
//     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     let regnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     let regpwd1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     let regname = /\d+$/g;

//     // if(name == "" || regname.test(name)){

//     // }
//     if(email == "" || !regexp.test(email.value)){
//         // error.innerHTML = "Invalid Email Address";
//         // error.style.color = "red";
//         // email.style.border = "2px solid red"
//         window.alert("pls enter email");
//         email.focus();
//         return false;

//     }
//     if(pwd == "" || !regpwd.test(pwd)){
//         error2.innerHTML = "Invalid Password";
//         error2.style.color = "red";
//         pwd.style.border = "2px solid red"
//         return false;

//     }
//     if(pwd1 == "" || !regpwd.test(pwd1)){
//         error3.innerHTML = "Invalid Password";
//         error3.style.color = "red";
//         pwd1.style.border = "2px solid red"
//         return false;

//     }
//     if(num == "" || !regnum.test(num)){
//         error4.innerHTML = "Invalid phone number";
//         error4.style.color = "red";
//         num.style.border = "2px solid red"
//         return false;

//     }
//     return true;
// }

// new validation








// let email = document.getElementById("email");
// let error = document.getElementById("error");
// let num = document.getElementById("num");
// let error1 = document.getElementById("error1");
// let pwd = document.getElementById("pwd");
// let error2 = document.getElementById("error2");



// function validate(){
    
//     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
//     if(regexp.test(email.value)){
//         error.innerHTML = "Valid";
//         error.style.color = "green";
//         return true;
//     }
//     else {
//         error.innerHTML = "Invalid Email Address";
//         error.style.color = "red";
//         email.style.border = "2px solid red"
//         return false;
//     }
// }

// function validate(){
//     let regnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(regnum.test(num.value)){
//         error1.innerHTML = "valid";
//         error1.style.color = "green";
//         return true;
//     }
//     else{
//         error1.innerHTML = "Invalid phone number";
//         error1.style.color = "red";
//         num.style.border = "2px solid red"
//         return false;
//     }
// }

// function validate(){
//     let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     if(regpwd.test(pwd.value)){
//         error2.innerHTML = "valid";
//         error2.style.color = "green";
//         return true;
//     }
//     else{
//         error2.innerHTML = "Invalid Password";
//         error2.style.color = "red";
//         pwd.style.border = "2px solid red"
//         return false;
//     }
// }

