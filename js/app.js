
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId).value;
    const InputFloat = parseFloat(inputValue);
    return InputFloat;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    // Getting input value    
    const incomeValue = getInputValue('income');
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');

    if (incomeValue < 0 || isNaN(incomeValue)) {
        alert("Enter the valid Income value !");
    }
    else if (foodValue < 0 || isNaN(foodValue)) {
        alert("Enter the valid Food value !");
    }
    else if (rentValue < 0 || isNaN(rentValue)) {
        alert("Enter the valid Rent value !");
    }
    else if (clothesValue < 0 || isNaN(clothesValue)) {
        alert("Enter the valid Clothes value !");
    }
    else {
        // Add expenses 
        const expense = document.getElementById('expense');
        const expenseValue = expense.innerText;
        const totalExpense = foodValue + rentValue + clothesValue;
        if (totalExpense > incomeValue) {
            alert('Please reduce your expenses.');
        }
        else {
            // balance 
            const balance = document.getElementById('balance');
            const newBalance = incomeValue - totalExpense;

            expense.innerText = foodValue + rentValue + clothesValue;
            balance.innerText = newBalance;
        }
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    // Getting income Value
    const incomeValue = getInputValue('income');
    // Save 
    const saveValue = getInputValue('save');

    if (saveValue < 0 || isNaN(saveValue)) {
        alert("Enter a valid Save value !");
    }
    else {
        const saveFraction = saveValue / 100;
        const newSavingAmount = incomeValue * saveFraction;
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = newSavingAmount;
        const remaining = document.getElementById('remaining');
        const balance = document.getElementById('balance').innerText;
        if (balance < newSavingAmount) {
            alert(saveValue + '% savings is not possible.');
        }
        else {
            const remainingBalance = balance - newSavingAmount;
            remaining.innerText = remainingBalance;
        }
    }
})
