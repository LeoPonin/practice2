const input = document.getElementById("username");
const button = document.getElementById("setCookieBtn");


function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}


button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    setCookie("username", name, 7);
    alert("Cookie has been set!");
    input.value = "";
  } else {
    alert("Please enter a name first.");
  }
});
