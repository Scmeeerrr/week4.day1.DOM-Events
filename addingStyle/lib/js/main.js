// Step 1: Change right side's background color
let newGalio = document.querySelector(".right_side");
newGalio.style.backgroundColor = "#d3c26f";

// Step 2: Set shadow to text
let names = document.querySelectorAll(".name");
for (let i = 0; i < names.length; i++) {
    names[i].style.textShadow = "-6px 5px 2px yellow";
}