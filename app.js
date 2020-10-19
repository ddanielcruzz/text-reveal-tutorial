const text = document.querySelector(".text");
const textString = text.textContent;
const textArray = textString.split("");

text.textContent = "";

textArray.forEach((letter, idx) => {
  console.log(letter);
  text.innerHTML += `<span style="--char-index:${idx}" class="show">${letter}</span>`;
});
