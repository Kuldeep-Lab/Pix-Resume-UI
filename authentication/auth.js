// login form code 
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  let loginInfo = {
      userId: email,
      password: password
  };
  
  console.log("Welcome back", loginInfo);
});


// register form code
function handleSave(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("number").value;
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  const registerInfo = {
      userName: name,
      userId: email,
      userPhone: phone,
      userRole: role,
      userPassword: password
  };

  console.log("Registered successfully", registerInfo);
}