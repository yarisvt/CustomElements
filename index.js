import Select from "./elements.js";

const selectElement = document.querySelector("select");
const button = document.querySelector("button");

const customSelectElement = new Select(selectElement);

button.addEventListener("click", () => {
  console.log(customSelectElement.selectedOption.label);
});
