const color = document.querySelector("input");
const button = document.querySelector("button");
const colorsDiv = document.querySelector(".colors");
const firstColor = document.getElementById("color-1");
const secondColor = document.getElementById("color-2");
const thirdColor = document.getElementById("color-3");
const fourthColor = document.getElementById("color-4");
const fifthColor = document.getElementById("color-5");
const options = document.getElementById("optionsId");
const firstText = document.getElementById("text-1");
const secondText = document.getElementById("text-2");
const thirdText = document.getElementById("text-3");
const fourthText = document.getElementById("text-4");
const fifthText = document.getElementById("text-5");
const darkModeOff = document.getElementById("darkModeOff");
const darkModeOn = document.getElementById("darkModeOn");
const topSide = document.getElementById("topSide");
const bottomSide = document.getElementById("bottomSide");
const container = document.getElementById("container");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const select = document.getElementById("optionsId");
let colorValue;

function copyToClipboard() {
  firstColor.addEventListener("click", function () {
    navigator.clipboard.writeText(firstText.textContent);
    alert(`Copied to clipboard: ${firstText.textContent}`);
  });
  secondColor.addEventListener("click", function () {
    navigator.clipboard.writeText(secondText.textContent);
    alert(`Copied to clipboard: ${secondText.textContent}`);
  });
  thirdColor.addEventListener("click", function () {
    navigator.clipboard.writeText(thirdText.textContent);
    alert(`Copied to clipboard: ${thirdText.textContent}`);
  });
  fourthColor.addEventListener("click", function () {
    navigator.clipboard.writeText(fourthText.textContent);
    alert(`Copied to clipboard: ${fourthText.textContent}`);
  });
  fifthColor.addEventListener("click", function () {
    navigator.clipboard.writeText(fifthText.textContent);
    alert(`Copied to clipboard: ${fifthText.textContent}`);
  });
}

function generateScheme(option) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue.substring(
      1
    )}&mode=${option}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      firstColor.style.backgroundColor = data.colors[0].hex.value;
      secondColor.style.backgroundColor = data.colors[1].hex.value;
      thirdColor.style.backgroundColor = data.colors[2].hex.value;
      fourthColor.style.backgroundColor = data.colors[3].hex.value;
      fifthColor.style.backgroundColor = data.colors[4].hex.value;

      firstText.textContent = data.colors[0].hex.value;
      secondText.textContent = data.colors[1].hex.value;
      thirdText.textContent = data.colors[2].hex.value;
      fourthText.textContent = data.colors[3].hex.value;
      fifthText.textContent = data.colors[4].hex.value;
    });
}

color.addEventListener("input", function () {
  colorValue = color.value;
});

button.addEventListener("click", function () {
  if (options.value == "monochrome") {
    generateScheme("monochrome");
  } else if (options.value == "monochrome-dark") {
    generateScheme("monochrome-dark");
  } else if (options.value == "monochrome-light") {
    generateScheme("monochrome-light");
  } else if (options.value == "analogic") {
    generateScheme("analogic");
  } else if (options.value == "complement") {
    generateScheme("complement");
  } else if (options.value == "analogic-complement") {
    generateScheme("analogic-complement");
  } else if (options.value == "triad") {
    generateScheme("triad");
  }
});
copyToClipboard();

darkModeOff.addEventListener("click", function () {
  darkModeOff.classList.toggle("hidden");
  darkModeOn.classList.toggle("hidden");
  topSide.style.backgroundColor = "#1F2937";
  bottomSide.style.backgroundColor = "#1F2937";
  button.style.backgroundColor = "#3D4B60";
  button.style.color = "#FFFFFF";
  button.style.border = "none";
  container.style.color = "#FFFFFF";
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  select.style.backgroundColor = "#1F2937";
  select.style.color = "#FFFFFF";
});

darkModeOn.addEventListener("click", function () {
  darkModeOn.classList.toggle("hidden");
  darkModeOff.classList.toggle("hidden");
  topSide.style.backgroundColor = "#FFFFFF";
  bottomSide.style.backgroundColor = "#FFFFFF";
  button.style.backgroundColor = "#FFFFFF";
  button.style.color = "#000000";
  button.style.border = "1px solid gray";
  container.style.color = "#000000";
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
  select.style.backgroundColor = "#FFFFFF";
  select.style.color = "#000000";
});
