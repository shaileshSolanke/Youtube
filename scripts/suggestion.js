import { suggestions } from "../Data/data.js";

const element = document.querySelector(".suggestion");

suggestions.forEach((item) => {
  element.innerHTML += `<span>${item}</span>`;
});
