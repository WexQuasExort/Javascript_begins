const answer = Math.floor(Math.random() * 10 + 1);
document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    if (guess == answer){
        console.log("It's True")
    }else{
        console.log("It's Wrong")
    }
}