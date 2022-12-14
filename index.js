const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");


checkBtn.addEventListener("click", checkDateOfBirth);

function checkDateOfBirth() {
    if (Number(luckyNumber.value) > 0) {
        var dobSum = calculateSum(dateOfBirth.value);
        var inputLuckyNumber = Number(luckyNumber.value);
        if (dateOfBirth.value && inputLuckyNumber) {
            compareValues(dobSum, inputLuckyNumber);
        }
        else {
            output.innerText = "Please enter both the fields"
        }
    }
    else {
        output.innerText = "Please enter positive lucky number. Negative values are not allowed."
    }
}

function calculateSum(dob) {
    var sum = 0;
    dob = dob.replaceAll("-", "");
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;

}
function compareValues(dobsum, luckyNum) {
    if (dobsum % luckyNum == 0) {
        output.innerText = "Your Birthday is Lucky🎉";
    }
    else {
        output.innerText = "Your birthday is not lucky. Try again with other lucky number.😢"
    }
}