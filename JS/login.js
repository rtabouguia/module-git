const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000", { email, password });
});