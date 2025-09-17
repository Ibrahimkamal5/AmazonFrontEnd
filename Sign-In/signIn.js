let userName = document.querySelector("[type='text']");
console.log(userName);

let password = document.querySelector("[type='password']");
console.log(password);

document.forms[0].onsubmit = function(e) {
   let userValid = false;
   let passValid = false;

   if (userName.value !== "") {
      userValid = true;
   }

   if (password.value !== "" && password.value.length >= 10) {
      passValid = true;
   }

   if (!userValid || !passValid) {
      e.preventDefault(); 
   }
}
