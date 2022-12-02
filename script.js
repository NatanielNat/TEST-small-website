{
    const welcome= () => {
        console.log("nie umiem jeszcze zmienic styli za pomaca js,a chcialem zmienic kolor hovera na nawigacje kiedy jest czarno biala :/ ");
    }
    welcome();
}
{
    const toogleBackgroundColor = () =>{

        let background = document.querySelector(".container");
        
         background.classList.toggle("hidden");
        
        if (background.classList.contains("hidden")) { przycisk.innerText = "Zmien Kolor Na Czarno Bialy" }
        else { przycisk.innerText = "Zmien Kolor Na Gradient" }
        
        
        };
        let przycisk = document.querySelector(".button");
        
        przycisk.addEventListener("click",toogleBackgroundColor);
        
}




