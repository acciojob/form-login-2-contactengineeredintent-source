//your JS code here. If required.
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  let pNumber = document.getElementById("pNumber").value;
  let eMail = document.getElementById("email").value;
  alert(`First Name:${fName} Last Name:${lName} Phone Number:${pNumber} Email ID:${eMail}`);
});
