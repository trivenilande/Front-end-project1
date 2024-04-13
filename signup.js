let fName = document.querySelectorAll("input")[0];
let lName = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let mobileNo = document.querySelectorAll("input")[3];
let password = document.querySelectorAll("input")[4];
let confirmPass = document.querySelectorAll("input")[5];

let efirst = document.querySelectorAll("span")[0];
let eLast = document.querySelectorAll("span")[1];
let eEmail = document.querySelectorAll("span")[2];
let eMobile = document.querySelectorAll("span")[3];
let ePass = document.querySelectorAll("span")[4];
let eCpass = document.querySelectorAll("span")[5];

let form = document.querySelector("form");

let storage = [];
let localData = JSON.parse(localStorage.getItem("data"));

if (localData) {
  storage = localData;
  // console.log(storage);
}

// console.log(fName,lName,email,mobileNo,password,confirmPass,efirst,eLast,eEmail,eMobile,ePass,eCpass);

form.addEventListener("submit", (e) => {
  let regx = /^[a-zA-Z]{2,15}$/; //square-user can type curly- length
  let regx1 = /^[6-9][0-9]{9}$/; //for last name
  let regx2 = /^[a-zA-Z0-9]{8,15}$/; //for password
  let flag = true;

  if (fName.value == "") {
    efirst.innerHTML = "first name required";
    e.preventDefault();
    flag = false;
  } else if (regx.test(fName.value)) {
    efirst.innerHTML = "";
  } else {
    efirst.innerHTML = "Invalid first name";
    e.preventDefault();
    flag = false;
  }

  if (lName.value == "") {
    eLast.innerHTML = "Last Name required";
    e.preventDefault();
    flag = false;
  } else if (regx.test(lName.value)) {
    eLast.innerHTML = "";
  } else {
    eLast.innerHTML = "Invalid Last Name";
    e.preventDefault();
    flag = false;
  }
  //email
  if (email.value == "") {
    eEmail.innerHTML = "Email is required";
    e.preventDefault();
    flag = false;
  } else {
    eEmail.innerHTML = "";
  }
  //for mobile no
  if (mobileNo.value == "") {
    eMobile.innerHTML = "mobile no required";
    e.preventDefault();
    flag = false;
  } else if (regx1.test(mobileNo.value)) {
    eMobile.innerHTML = "";
  } else {
    eMobile.innerHTML = "Invalid mobile number";
    e.preventDefault();
    flag = false;
  }
  //password
  if (password.value == "") {
    ePass.innerHTML = "Enter password";
    e.preventDefault();
    flag = false;
  } else if (regx2.test(password.value)) {
    ePass.innerHTML = "";
  } else {
    ePass.innerHTML = "Invalid Password";
    e.preventDefault();
    flag = false;
  }

  //confirm pass
  if (confirmPass.value == password.value) {
    eCpass.innerHTML = "";
  } else {
    eCpass.innerHTML = "Invalid";
    e.preventDefault();
    flag = false;
  }

  if (flag) {
    let obj = {
      first: fName.value,
      last: lName.value,
      email: email.value,
      phone: mobileNo.value,
      pass: password.value,
    };

    storage.push(obj);
    // console.log(storage);
    localStorage.setItem("data", JSON.stringify(storage));
  }
});
