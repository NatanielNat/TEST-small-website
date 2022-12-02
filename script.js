
console.log("nie umiem jeszcze zmienic styli za pomaca js,a chcialem zmienic kolor hovera na nawigacje kiedy jest czarno biala :/ ")


let przycisk = document.querySelector(".button")
let background = document.querySelector(".container")

przycisk.addEventListener("click", () => {
    background.classList.toggle("hidden");

    if (background.classList.contains("hidden")) { przycisk.innerText = "Zmien Kolor Na Czarno Bialy" }
    else { przycisk.innerText = "Zmien Kolor Na Gradient" }

});




