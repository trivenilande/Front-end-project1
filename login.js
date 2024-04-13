let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let eUser = document.querySelectorAll("span")[0];
let ePass = document.querySelectorAll("span")[1];
let eSubmit = document.querySelectorAll("span")[2];
console.log(form, userName, password);
console.log(eUser, ePass, eSubmit);
let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     if(userName.value=="" && password.value==""){
//         alert("user name required");
//         alert("password required");
//     } else if(userName.value== "") {
//         alert("user name required");
//     } else if(password.value == ""){
//         alert("password is required");
//     } else if(userName.value == "sheetal" && password.value == "123456"){
//         alert("Boss welcome to the page");
//     } else {
//         alert("kachada go away");
//     }
// });

form.addEventListener("submit", (e) => {
  eUser.innerHTML = "";
  ePass.innerHTML = "";
  eSubmit.innerHTML = "";

  let matching = localData.find((e) => {
    if (userName.value == e.email && password.value == e.pass) {
      return e;
    }
  });
  console.log(matching);

  if (userName.value == "" && password.value == "") {
    eUser.innerHTML = "please type the username";
    ePass.innerHTML = "please type password";
    e.preventDefault();
  } else if (userName.value == "") {
    eUser.innerHTML = "type the username";
    e.preventDefault();
  } else if (password.value == "") {
    ePass.innerHTML = "type the password";
    e.preventDefault();
  } else if (matching) {
    localStorage.setItem("particularUser", JSON.stringify(matching));
  } else {
    eSubmit.innerHTML = "password is not matching";
    e.preventDefault();
  }
});
