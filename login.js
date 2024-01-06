document.getElementById("adminLogin").addEventListener("click", function () {
  const email = document.getElementById("exampleFormControlInput1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  if (email === "admin@admin.com" && password === "123456") {
    alert("Login successful");
  } else {
    alert("Incorrect email or password");
  }
});
