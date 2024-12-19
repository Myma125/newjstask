function isValid() {
  var userName = document.getElementById("un").value;

  var email = document.getElementById("email").value;

  var password = document.getElementById("pass").value;

  var confirm = document.getElementById("confirm").value;

  var errorMessage = document.getElementById("error");

  errorMessage.style.padding = "10px";
  errorMessage.style.backgroundColor = "red";
  errorMessage.style.color = "white";
  errorMessage.style.textAlign = "center";
  errorMessage.style.marginBottom = "20px";
  errorMessage.style.transition = "all .5s ease-in";

  if (email == "" && userName == "" && password == "" && confirm == "") {
    errorMessage.innerHTML = "insert valid data";
    return false;
  } else if (userName.length < 5 || userName.length > 15) {
    errorMessage.innerHTML = "enter a username with 5-15 characters";
    return false;
  } else if (email.indexOf("@") == -1) {
    errorMessage.innerHTML = "Enter Valid Email";
    return false;
  } else if (password.length < 8) {
    errorMessage.innerHTML =
      "the password should at least be 8 characters long";
    return false;
  } else if (password != confirm) {
    errorMessage.innerHTML = "the password does not match";
    return false;
  }
}
