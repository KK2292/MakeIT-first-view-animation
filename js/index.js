document.addEventListener("DOMContentLoaded", () => {
  const subTitle = document.getElementsByClassName("sub-title")[0];
  const text = subTitle.textContent;
  subTitle.innerHTML = "";
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    subTitle.appendChild(span);
  });
});
