const form = document.querySelector("form");
console.log(form);
const email = document.getElementById("email").value;
console.log(email);
const password = document.getElementById("pwd").value;
console.log(password);
const test = document.querySelector(".test");
console.log(test);
const btn = document.querySelector("button");
console.log(btn);

//EventListener
btn.addEventListener('click',()=>{
if(email == ''){
    test.textContent ="please enter your email";
}
if(!password.match(/^$[a-zA-Z][0-9]/)){
    test.textContent = "submitted succesfully";
test.Style.Color = 'green';
}
else{
 test.textContent = "Incorrect password";
}
})