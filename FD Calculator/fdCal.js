function calculateMaturityAmount(){
    //get input values from the form elements

    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);
    
    //Performing the Calculation

    const maturityAmount = principal+(principal*interestRate*tenure)/100;

    // Displaying the Result

    document.getElementById("result").innerText = `Maturity Amount: ${
    maturityAmount.toFixed(2)}`     //here toFixed(2) shows that after decimal point their will be 2 values
}

document.getElementById("calculateBtn").addEventListener("click",calculateMaturityAmount);