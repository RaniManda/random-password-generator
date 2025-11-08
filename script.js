// Character groups
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]{};:,.<>/?";

// Select elements
const passwordDisplay = document.getElementById("password-display");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");

const includeLower = document.getElementById("include-lower");
const includeUpper = document.getElementById("include-upper");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

// Update password length in real-time
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

// Generate password
function generatePassword() {
  let length = parseInt(lengthSlider.value);
  let characterPool = "";

  if (includeLower.checked) characterPool += lowercase;
  if (includeUpper.checked) characterPool += uppercase;
  if (includeNumbers.checked) characterPool += numbers;
  if (includeSymbols.checked) characterPool += symbols;

  if (characterPool === "") {
    passwordDisplay.textContent = "⚠️ Please select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  passwordDisplay.textContent = password;
}

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  const password = passwordDisplay.textContent.trim();

  if (!password || password.startsWith("⚠️") || password === "Click Generate") {
    alert("Generate a valid password first!");
    return;
  }

  navigator.clipboard.writeText(password);
  copyBtn.textContent = "✅";
  setTimeout(() => (copyBtn.textContent = "📋"), 900);
});

// Generate on button click
generateBtn.addEventListener("click", generatePassword);
