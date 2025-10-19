const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");

// Save name to localStorage
saveBtn.addEventListener("click", function () {
  const name = nameInput.value;
  if (name) {
    localStorage.setItem("savedName", name);
    alert("Name saved!");
    nameInput.value = ""; // Clear input
  } else {
    alert("Please enter a name first.");
  }
});

// Load name from localStorage
loadBtn.addEventListener("click", function () {
  const storedName = localStorage.getItem("savedName");
  if (storedName) {
    output.textContent = storedName;
  } else {
    output.textContent = "No name found in localStorage.";
  }
});
