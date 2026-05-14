const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      codes[index - 1].value = "";
      codes[index - 1].focus();
    }
  });

});