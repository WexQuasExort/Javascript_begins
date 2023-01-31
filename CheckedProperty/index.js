document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox")
    if (myCheckBox.checked){
        console.log("Checked!")
    }else{
        console.log("not Checked")
    }
}
document.getElementById("myButton2").onclick = function(){
    const radiobtn1 = document.getElementById("visaBtn")
    const radiobtn2 = document.getElementById("mastercardBtn")
    const radiobtn3 = document.getElementById("paypalBtn")
    if(radiobtn1.checked){
        console.log("You are paying with Visa")
    } else if(radiobtn2.checked){
        console.log("You are paying with Mastercard")
    }else if(radiobtn3.checked){
        console.log("You are paying with PayPal")
    }else{
        console.log("You must select a payment type!")
    }
}