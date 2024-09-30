window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".first-view-contents").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  }, 2500);
});

const typeTarget = document.querySelectorAll(".sub-title");

typeTarget.forEach((element) => {
  let typeContent = element.textContent;
  let typeSprit = typeContent.split("");
  element.textContent = "";
  let typeLength = 0;

  const typeFunction = () => {
    const typeInterval = setInterval(() => {
      if (typeLength < typeSprit.length) {
        if (typeSprit[typeLength - 1] === ",") {
          clearInterval(typeInterval);
          setTimeout(() => {
            element.textContent += typeSprit[typeLength];
            typeLength++;
            typeFunction();
          }, 500);
        } else {
          element.textContent += typeSprit[typeLength];
          typeLength++;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 70);
  };

  setTimeout(typeFunction, 3200);
});
