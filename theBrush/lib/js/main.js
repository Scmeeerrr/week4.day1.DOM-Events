// Step 1: Making the Rengar image pop up after clicking screen
let rengarImg = document.getElementById("rengar");

function rengarReveal() {
    rengarImg.src = "assets/rengar.png";
    alert("You've been deleted!"); // Step 2: Making alert pop up after Rengar
}

document.onclick = rengarReveal;