let colorPicker = document.querySelector(".colorPicker")
let h4 = document.querySelector("h4")
let main = document.querySelector(".main")

function colourPick(){
    h4.innerText = colorPicker.value
    main.style.backgroundColor = colorPicker.value
}


colorPicker.addEventListener("input",()=>{
    colourPick()

})