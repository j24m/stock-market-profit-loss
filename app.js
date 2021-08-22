const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click",submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity,current){
    if(initial>current){
        var loss= (initial-current) * quantity;
        var lossPercentage =(loss/initial) * 100;
        output.innerText="Hey the loss is "+loss+ " and the loss percentage is "+lossPercentage+ " %"; 
    }
    else if(current>initial){
        var profit= (current-initial) * quantity;
        var profitPercentage =(profit/initial) * 100;
        output.innerText="Hey the profit is "+profit+ " and the profit percentage is "+profitPercentage+ " %" ;
    }
    else{
        output.innerText="no profit or loss";
    }
}