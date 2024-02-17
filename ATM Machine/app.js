// ATM MACHINE 

let pin = "1234";
let userPassword = prompt("Enter your pin to access the ATM:");

if (userPassword === pin) {
    let balance = 1500;

    while (true) {
        let choice = +(prompt("Welcome to the ATM! \n\nPlease choose an option: \n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit"));

        switch (choice) {
            case 1:
                let depositAmount = +(prompt(`Enter deposit amount your balance is $${balance}.`));
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    balance += depositAmount;
                    alert(`Deposit successful. Your current balance is $${balance}.`);
                } else {
                    alert("Invalid deposit amount.");
                }
                break;
            
            case 2:
                let withdrawAmount = +(prompt(`Enter withdrawal amount your balance is $${balance}.`));
                if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    if (withdrawAmount <= balance) {
                        balance -= withdrawAmount;
                        alert(`Withdrawal successful. Your current balance is $${balance}.`);
                    } else {
                        alert("Insufficient funds.");
                    }
                } else {
                    alert("Invalid withdrawal amount.");
                }
                break;
            
            case 3:
                alert(`Your current balance is $${balance}.`);
                break;
            
            case 4:
                alert("Thank you for using the ATM.");
                exit();
            
            default:
                alert("Invalid choice. Please choose a valid option.");
                break;
        }
    }
} else {
    alert("Incorrect password. Access denied.");
}