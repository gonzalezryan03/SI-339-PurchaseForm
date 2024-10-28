function sameAddress(button) {
    console.log("Clicked the button");

    if (button.checked === true){
        document.querySelector('#bill-street').value = document.querySelector('#street').value;
        document.querySelector('#bill-city').value = document.querySelector('#city').value;
        document.querySelector('#bill-state').value = document.querySelector('#state').value;
        document.querySelector('#bill-zip').value = document.querySelector('#zip').value;
        document.querySelector('#bill-country').value = document.querySelector('#country').value;
    } else {
        document.querySelector('#bill-street').value = "";
        document.querySelector('#bill-city').value = "";
        document.querySelector('#bill-state').value = "";
        document.querySelector('#bill-zip').value = "";
        document.querySelector('#bill-country').value = "";

    }
}
