function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const inputAmountText = depositInput.value;
    const depositInputAmmount = parseFloat(inputAmountText);
     //clear deposit input field
     depositInput.value = '';
     return depositInputAmmount;
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
    const depositInputAmmount = getInputValue();

    const previousAmount = document.getElementById('deposit-ammount');
    //previousAmount.innerText = inputAmountText;
    const previousAmountText = previousAmount.innerText;
   const previousDepositAmount = parseFloat(previousAmountText);
    // Update deposit and previous + present------------------------
    const totalDeposit = previousDepositAmount + depositInputAmmount;
    previousAmount.innerText = totalDeposit;
/*
    //clear deposit input field
    depositInput.value = '';
*/

//update deposit Balance--------------------------------
const balanceAmount = document.getElementById('balance-ammount');
const preBalanceText =balanceAmount.innerText;
const preBalanceAmount =parseFloat(preBalanceText);
const totalBalance = preBalanceAmount + depositInputAmmount;
balanceAmount.innerText =totalBalance;

})

//Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    const preWithdrawAmount = document.getElementById('withdraw-ammount');
    const withdrawAmountText = preWithdrawAmount.innerText;
    const preWithdrawInputAmount = parseFloat(withdrawAmountText);

    const totalWithdraw = preWithdrawInputAmount + withdrawInputAmount;
    preWithdrawAmount.innerText = totalWithdraw;

    //update total balance=total balace - withdraw----
    const balanceAmount = document.getElementById('balance-ammount');
    const preBalanceText =balanceAmount.innerText;
    const preBalanceAmount =parseFloat(preBalanceText);
    const totalBalance = preBalanceAmount - withdrawInputAmount;
    balanceAmount.innerText =totalBalance;

   //Clear Withdraw input field
   withdrawInput.value = '';
})
