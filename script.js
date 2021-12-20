// var x = 20;

// x = x + 1;
// var totalNumber = x + 10;

// var totalNumber = x + 10;
// console.log("number is", x)


// let x = 10;
// x--
// // x++
// console.log(x)

// USER INPUT

// const myName = window.prompt("what is your name?");

// console.log("my name is", myName)

document.getElementById('btn').onclick = function () {
    const yourName = document.getElementById('input').value;
    document.getElementById('demo').innerHTML = "My name is :" + yourName;
}