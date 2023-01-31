// find the Hypotenuse !!!
let a;
let b;
let c;

//  via window prompt
//  a = window.prompt("Enter a");
//  b = window.prompt("Enter b");
//  c = Math.sqrt(a**2 + b**2);

//  console.log(c);
/*--------------------------------------*/
//  via html
document.getElementById("btn1").onclick = function(){
    a = document.getElementById("input1").value;
    b = document.getElementById("input2").value;
    c = Math.sqrt(a**2 + b**2);
    document.getElementById("txt3").innerHTML += c;

}
