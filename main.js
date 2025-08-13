const ourCookie = document.getElementById("cookie");
// console.log(ourCookie);
let cps = document.getElementById("cps").innerText;
// console.log(cps);
let cpsCount = Number(cps.split("/")[0]);
// console.log(cpsCount);



let cookieCount = document.getElementById("counter");
console.log(cookieCount);

ourCookie.addEventListener('click', function() {
  
  let currentNumber = Number(cookieCount.innerHTML);
  currentNumber++;
  cookieCount.innerText = currentNumber;

});

setInterval(function() {
  let currentNumber = Number(cookieCount.innerHTML);
  currentNumber += cpsCount;
  cookieCount.innerText = currentNumber;
}, 1000);

function updateCps(num) {
  
  
  console.log("gramsCount " + grandMotherCount);
  console.log(cpsCount);
  cpsCount += num;
  console.log(cpsCount);
  console.log("bakesCount " + bakerCount);
  
  console.log("fac " + factoryCount);
  
  
  document.getElementById('cps').innerHTML = `${cpsCount}/s`;
}



const grandMotherButton = document.getElementById('item-1');
let grandMotherCount = 0;

grandMotherButton.addEventListener('click', function() {
  
  if (Number(cookieCount.innerHTML) >= 100) {
    let currentCookieCount = cookieCount.innerHTML;
    currentCookieCount -= 100;
    cookieCount.innerHTML = currentCookieCount;
    grandMotherCount++;
    updateCps(1);  
  }
});


const bakerButton = document.getElementById('item-2');
let bakerCount = 0;

bakerButton.addEventListener('click', function() {
  if (Number(cookieCount.innerHTML) >= 500) {
    let currentCookieCount = cookieCount.innerHTML;
    currentCookieCount -= 500;
    cookieCount.innerHTML = currentCookieCount;
    bakerCount++; 
    updateCps(3);     
  }  
});


const factoryButton = document.getElementById('item-3');
let factoryCount = 0;

factoryButton.addEventListener('click', function() {
  if (Number(cookieCount.innerHTML) >= 5000) {
    let currentCookieCount = cookieCount.innerHTML;
    currentCookieCount -= 5000;
    cookieCount.innerHTML = currentCookieCount;
    factoryCount++; 
    updateCps(5);     
  }  
});

