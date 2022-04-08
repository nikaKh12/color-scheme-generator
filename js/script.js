const color = document.querySelector("input");
const button = document.querySelector("button");
const colorsDiv = document.querySelector(".colors");
const firstColor = document.getElementById("color-1");
const secondColor = document.getElementById("color-2");
const thirdColor = document.getElementById("color-3");
const fourthColor = document.getElementById("color-4");
const fifthColor = document.getElementById("color-5");
const options = document.getElementById("optionsId");
const firstColorValue = document.getElementById("color-value-1");
const secondColorValue = document.getElementById("color-value-2");
const thirdColorValue = document.getElementById("color-value-3");
const fourthColorValue = document.getElementById("color-value-4");
const fifthColorValue = document.getElementById("color-value-5");
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
    navigator.clipboard.writeText(firstColorValue.textContent);
    alert(`Copied to clipboard: ${firstColorValue.textContent}`);
  });
  secondColor.addEventListener("click", function () {
    navigator.clipboard.writeText(secondColorValue.textContent);
    alert(`Copied to clipboard: ${secondColorValue.textContent}`);
  });
  thirdColor.addEventListener("click", function () {
    navigator.clipboard.writeText(thirdColorValue.textContent);
    alert(`Copied to clipboard: ${thirdColorValue.textContent}`);
  });
  fourthColor.addEventListener("click", function () {
    navigator.clipboard.writeText(fourthColorValue.textContent);
    alert(`Copied to clipboard: ${fourthColorValue.textContent}`);
  });
  fifthColor.addEventListener("click", function () {
    navigator.clipboard.writeText(fifthColorValue.textContent);
    alert(`Copied to clipboard: ${fifthColorValue.textContent}`);
  });
}

function generateScheme(option) {
  if (colorValue !== undefined) {
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

        firstColorValue.textContent = data.colors[0].hex.value;
        secondColorValue.textContent = data.colors[1].hex.value;
        thirdColorValue.textContent = data.colors[2].hex.value;
        fourthColorValue.textContent = data.colors[3].hex.value;
        fifthColorValue.textContent = data.colors[4].hex.value;
      });
  } else {
    alert("Change the color");
  }
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
