document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField= inputField('withdraw-input');
    const totalWithdraw = elementField('withdraw-total');
    
    const newWithdrawTotal = withdrawField + totalWithdraw;

    setTextElementValuById('withdraw-total',newWithdrawTotal);

    const previousBalance = elementField('total-balance');
    const newBalanceTotal = previousBalance - withdrawField ;

    setTextElementValuById('total-balance',newBalanceTotal);

})