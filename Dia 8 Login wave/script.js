//This is the result of how the label looks
{/* <label>
  <span style="transition-delay:0ms">E</span>
  <span style="transition-delay:50ms">m</span>
  <span style="transition-delay:100ms">a</span>
  <span style="transition-delay:150ms">i</span>
  <span style="transition-delay:200ms">l</span>
</label>; */}

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
