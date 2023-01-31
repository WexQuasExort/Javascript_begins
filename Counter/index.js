let count = 0;

document.getElementById("btn1").onclick = function(){
    count --;
    document.getElementById("lbl1").innerHTML = count;
}
document.getElementById("btn2").onclick = function(){
    count =0;
    document.getElementById("lbl1").innerHTML = count;
}
document.getElementById("btn3").onclick = function(){
    count ++;
    document.getElementById("lbl1").innerHTML = count;
}