let userName = document.querySelector("[name='name']");
let email = document.querySelector("[name='email']");
let age = document.querySelector("[name='age']");
let password = document.querySelector("[name='pass']");
let confirmPassword = document.querySelector("[name='ConfirmPassWord']");

document.forms[0].onsubmit = function(e) {
   let userValid = false;
   let emailValid = false;
   let ageValid = false;
   let passValid = false;
   let confirmValid = false;

   // تحقق من اليوزرنيم
   if (userName.value.trim() !== "" && userName.value.length < 15) {
      userValid = true;
   }
   // تحقق من الإيميل (regex بسيط)
   let emailPattern = /\S+@\S+\.\S+/;
   if (emailPattern.test(email.value)) {
      emailValid = true;
   }
   // تحقق من العمر
   if (age.value !== "" && age.value > 12) {
      ageValid = true;
   }
   // تحقق من الباسورد
   if (password.value !== "" && password.value.length >= 10) {
      passValid = true;
   }
   // تحقق من تأكيد الباسورد
   if (confirmPassword.value === password.value && confirmPassword.value !== "") {
      confirmValid = true;
   }
   if (!userValid || !emailValid || !ageValid || !passValid || !confirmValid) {
      e.preventDefault(); 
   }
}
