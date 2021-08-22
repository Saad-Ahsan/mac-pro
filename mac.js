//---------memory----------//

function updateCost (price){
 
    const eightGbPrice = 0;
    const sixteenGbPrice = 180;
    const getId =document.getElementById('memory-cost');
    
    if(price == true){
        
         getId.innerText = sixteenGbPrice ;    
    }
    else{

         getId.innerText  =  eightGbPrice;
    }

     
}




document.getElementById('eight-gb').addEventListener('click', function(){
 updateCost(false);
 total();
  
  
})

document.getElementById('sixteen-gb').addEventListener('click',function(){

updateCost(true);
total();

})


//------- Storage---------//

function updateStorage(cost){
   const firstSsd = 0;
   const secondSsd = 100;
   const thirdSsd = 180;
   const getValue = document.getElementById('storage-cost');
   if(cost == true){
    getValue.innerText = thirdSsd;
       
   }
   else if (cost == false){
       getValue.innerText = secondSsd;
   }
   else{
      getValue.innerText = firstSsd;
   }

}

document.getElementById('first-ssd').addEventListener('click',function(){

  updateStorage();
  total();

})

document.getElementById('second-ssd').addEventListener('click',function(){

    updateStorage(false);
    total();
})

document.getElementById('third-ssd').addEventListener('click',function(){

    updateStorage(true);
    total();
})


//----- delivery------//

function updateDelivery (value){

const inDate = 0;
const beforeDate = 20;

const getElement = document.getElementById('delivery-cost');

if(value == true){
    getElement.innerText = inDate;
}
else{
    getElement.innerText = beforeDate;
}

}

document.getElementById('in-time').addEventListener('click',function(){

    updateDelivery(true);
    total();
})

document.getElementById('before-time').addEventListener('click',function(){

    updateDelivery(false);
    total();

})



//----- total-----//




 function total(){
   const price = parseInt(document.getElementById('fixed-price').innerText);
   const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
   const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
   const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
   let totalCost = parseInt(price + memoryPrice + storagePrice + deliveryPrice);
   document.getElementById('total-cost').innerText = totalCost;
   document.getElementById('main-total').innerText = totalCost;
 }

// 

function inputPrice() {
 const cuponValue = document.getElementById("cupon");
  const cuponInput = cuponValue.value;
  if (cuponInput == "stevekaku") {
      let lastAmount = parseFloat(document.getElementById("main-total").innerText);
      const discountCost = (lastAmount / 100) * 20;
      const totalDiscount = lastAmount - discountCost;
      document.getElementById("main-total").innerText = totalDiscount;
  }
  cuponValue.value = '';
}

document.getElementById('submit-button').addEventListener('click',function(){
  console.log('yo');
  inputPrice();

})

