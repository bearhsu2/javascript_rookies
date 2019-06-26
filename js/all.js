var cookiePrice = 35;
var myMoney = 15;


document.getElementById("cookiePrice").textContent = cookiePrice;
document.getElementById("myMoney").textContent = myMoney;
document.getElementById("diff").textContent = cookiePrice - myMoney;

console.log(cookiePrice);


function greet() {
    console.log('Hello');
    console.log('World')
}

function count(a, b) {
    console.log('total = ' + a*b);
}

greet();
count(3,4);

function show() {
    console.log(myMoney);

}
show();
