//your JS code here. If required.
const codes = document.querySelectorAll(".code");
codes.forEach((input, index) => {

    input.addEventListener("input", () => {
        // move to next input
        if(input.value && index < codes.length - 1){
            codes[index + 1].focus();
        }

    });
    // move to previous input
    input.addEventListener("keydown", (e)=>{
        if(e.key === "Backspace" && index > 0){
            codes[index].value = ""
            codes[index-1].focus();
        }
    })

});