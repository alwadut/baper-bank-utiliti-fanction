function inputField(inputValue){
    const totalInput = document.getElementById(inputValue);
    const totalInputString = totalInput.value;
    const totalInputAmount = parseFloat(totalInputString);
    totalInput.value = '';
    return totalInputAmount ;
}

function elementField(elementId){
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const totalElementValue = parseFloat(totalElementString);
    return totalElementValue;

}

function setTextElementValuById(elementId , newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue ;

}