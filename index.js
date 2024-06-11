let selectedColor = document.getElementById("selectedColorHexCode");
let colorPickerContainer = document.getElementById("colorPickerContainer");

function changeToGrey(){
    selectedColor.textContent  = '#e0e0e0';
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
}

function changeToGreen(){
    selectedColor.textContent  = '#6fcf97';
    colorPickerContainer.style.backgroundColor = "#6fcf97";
}

function changeToBlue(){
    selectedColor.textContent  = '#56ccf2';
    colorPickerContainer.style.backgroundColor = "#56ccf2";
}

function changeToPurple(){
    selectedColor.textContent  = '#bb6bd9';
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
}
