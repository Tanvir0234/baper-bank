function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
     //clear deposit input field
     input.value = '';
     return inputAmount;
}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const amountText = totalElement.innerText;
    const previousAmount = parseFloat(amountText);
    // Update deposit and previous + present------------------------
    const totalAmount = previousAmount + amount;
    totalElement.innerText = totalAmount;
}
function getCurrentBalance(){
    const balanceAmount = document.getElementById('balance-ammount');
    const preBalanceText =balanceAmount.innerText;
    const preBalanceAmount =parseFloat(preBalanceText);
    return preBalanceAmount;
}

function updateBalance(amount,isAdd){
    const balanceAmount = document.getElementById('balance-ammount');
    
    /*
    const preBalanceText =balanceAmount.innerText;
    const preBalanceAmount =parseFloat(preBalanceText);
    */
   preBalanceAmount = getCurrentBalance();
if(isAdd==true){
    balanceAmount.innerText = preBalanceAmount + amount;
}
else{
    balanceAmount.innerText = preBalanceAmount - amount;
}

}


document.getElementById('deposit-button').addEventListener('click',function(){
    /*
    //get add deposit input------------------------------
    const depositInput = document.getElementById('deposit-input');
    const inputAmountText = depositInput.value;
    //console.log(inputAmountText);
    const depositInputAmmount = parseFloat(inputAmountText);
    */
   //call function------
    const depositInputAmmount = getInputValue('deposit-input');
    if(depositInputAmmount > 0){
        updateTotalField('deposit-ammount',depositInputAmmount);
        updateBalance(depositInputAmmount,true);
    }
    

 /*  
    const previousAmount = document.getElementById('deposit-ammount');
    //previousAmount.innerText = inputAmountText;
    const previousAmountText = previousAmount.innerText;
   const previousDepositAmount = parseFloat(previousAmountText);
    // Update deposit and previous + present------------------------
    const totalDeposit = previousDepositAmount + depositInputAmmount;
    previousAmount.innerText = totalDeposit;
    */
/*
    //clear deposit input field
    depositInput.value = '';
*/

//update deposit Balance--------------------------------
/*
const balanceAmount = document.getElementById('balance-ammount');
const preBalanceText =balanceAmount.innerText;
const preBalanceAmount =parseFloat(preBalanceText);
const totalBalance = preBalanceAmount + depositInputAmmount;
balanceAmount.innerText =totalBalance;
*/

})

//Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
*/

    const withdrawInputAmount = getInputValue('withdraw-input');
    const preBalanceAmount = getCurrentBalance();
    if(withdrawInputAmount > 0 && preBalanceAmount > withdrawInputAmount){
        updateTotalField('withdraw-ammount',withdrawInputAmount);
        updateBalance(withdrawInputAmount,false);
    }
    else{
        console.log('Your current balance is lower then you want');
    }
   
/*    
    const preWithdrawAmount = document.getElementById('withdraw-ammount');
    const withdrawAmountText = preWithdrawAmount.innerText;
    const preWithdrawInputAmount = parseFloat(withdrawAmountText);

    const totalWithdraw = preWithdrawInputAmount + withdrawInputAmount;
    preWithdrawAmount.innerText = totalWithdraw;
*/
   
   
    
    
    
     //update total balance=total balace - withdraw---
     /*
    const balanceAmount = document.getElementById('balance-ammount');
    const preBalanceText =balanceAmount.innerText;
    const preBalanceAmount =parseFloat(preBalanceText);
    const totalBalance = preBalanceAmount - withdrawInputAmount;
    balanceAmount.innerText =totalBalance;
    */
/*
   //Clear Withdraw input field
   withdrawInput.value = '';
   */
})
