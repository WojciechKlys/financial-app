
document.getElementById("button").addEventListener("click", calculate);

function calculate() {
const amount = document.getElementById("amount");
const apr = document.getElementById("apr");
const years = document.getElementById("years");
const zipcode = document.getElementById("zipcode");
const payment = document.getElementById("payment");
const total = document.getElementById("total");
const totalinterest = document.getElementById("totalinterest");
    
const principal = parseFloat(amount.value);
const interest = parseFloat(apr.value) / 100 / 12;
const payments = parseFloat(years.value) * 12;

const x = Math.pow(1 + interest, payments); 
const monthly = (principal*x*interest)/(x-1);
  
payment.textContent = monthly.toFixed(2);
total.textContent = (monthly * payments).toFixed(2);
totalinterest.textContent = ((monthly*payments)-principal).toFixed(2);
    
  }