function calculateTotal() {
    // Get values from input fields
    let grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
    let grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
    let grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

    // Calculate total expenditure
    let total = grocery1 + grocery2 + grocery3;

    // Display result
    document.getElementById("result").innerText = "Total Grocery Expenditure: $" + total.toFixed(2);
}
