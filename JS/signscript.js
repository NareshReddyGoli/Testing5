function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }
  alert("Sign-in successful!");
}
function redirectToGoogle() {
  window.location.href = "https://accounts.google.com/signin";
}
