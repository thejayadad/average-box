



function check(){
    let array = [];
    let num = document.getElementById("number").value 
    let num1 = document.getElementById("number1").value
    let total = parseInt(num) + parseInt(num1);
    let average = total / 2;

    document.getElementById("result").innerHTML = average
    return average
}