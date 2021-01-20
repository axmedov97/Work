

function calc() {

    //console.log(document.getElementById('number-one').value);
    //console.log(document.getElementById('number-two').value);
    //console.log(document.getElementById('action').value);

    let numberOne = document.getElementById('number-one').value;
    let numberTwo = document.getElementById('number-two').value;
    let action = document.getElementById('action').value;

    let result;

    if(action == "add"){
        result = parseFloat(numberOne)+parseFloat(numberTwo);
    } else if(action == "subtract"){
        result = numberOne - numberTwo;
    } else if(action == "multiply"){
        result = numberOne * numberTwo;
    } else if(action == "divide") {
        result = numberOne / numberTwo;
    } else if (action == "root") {
        result = Math.sqrt(numberOne);
    }
    document.getElementById('result').innerHTML = "<div class='alert alert-success' id='nimadir'> Natija: <b" +
        " class='text-success'>"+result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") +
    "</b> <button type='button' class='close' data-dismiss='alert'>&times;</button></div>";

}
document.onkeyup = function (event) {
    if (event.which ==13 || event.keyCode == 13) {
        calc();
    }
}