document.getElementById('btn-diposit').addEventListener('click',function(){
   const newBalanceInput = inputField('diposite-input');
   const newDipositeAmount = elementField('diposit-total');

   const newTotalDipositAmount = newBalanceInput + newDipositeAmount ;

   setTextElementValuById('diposit-total' , newTotalDipositAmount );

   const previousBalance = elementField('total-balance');
   const newBalanceTotal = previousBalance + newBalanceInput ;
   setTextElementValuById('total-balance' , newBalanceTotal );

})