const PIN = "1234"; // Example PIN

const pinInput = document.getElementById('pinInput');
const loginBtn = document.getElementById('loginBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const depositBtn = document.getElementById('depositBtn');
const balanceBtn = document.getElementById('balanceBtn');
const logoutBtn = document.getElementById('logoutBtn');
const message = document.getElementById('message');
const balanceDisplay = document.getElementById('balanceDisplay');

let isLoggedIn = false;
let balance = 100000; // Example balance

loginBtn.addEventListener('click', () => {
  const enteredPin = pinInput.value;
  if (enteredPin === PIN) {
    isLoggedIn = true;
    message.textContent = "Welcome, logged in!";
    pinInput.value = "";
    updateBalanceDisplay();
  } else {
    message.textContent = "Incorrect PIN, try again!";
  }
});

withdrawBtn.addEventListener('click', () => {
  if (!isLoggedIn) {
    message.textContent = "Please login first.";
    return;
  }

  const amount = parseFloat(prompt("Enter amount to withdraw:"));

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Invalid amount.";
    return;
  }

  if (amount > balance) {
    message.textContent = "Insufficient funds.";
    return;
  }

  balance -= amount;
  updateBalanceDisplay();
  message.textContent = `Withdrawal of $${amount.toFixed(2)} processed. Remaining balance: ${balance.toFixed(2)}`;
});

depositBtn.addEventListener('click', () => {
  if (!isLoggedIn) {
    message.textContent = "Please login first.";
    return;
  }

  const amount = parseFloat(prompt("Enter amount to deposit:"));

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Invalid amount.";
    return;
  }

  balance += amount;
  updateBalanceDisplay();
  message.textContent = `Deposit of $${amount.toFixed(2)} processed. New balance: $${balance.toFixed(2)}`;
});

balanceBtn.addEventListener('click', () => {
  if (!isLoggedIn) {
    message.textContent = "Please login first.";
    return;
  }

  message.textContent = `Your balance is $${balance.toFixed(2)}.`;
});

logoutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  message.textContent = "Logged out. Thank you!";
  balance = 1000; // Reset balance to initial value upon logout
  updateBalanceDisplay();
});

function updateBalanceDisplay() {
  balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
}
