

var array = [3, 4, 7, 20, 8, 9];

function findProduct(array){ 
    
    //Create empty array to store product of indexes
    var productExceptIndex = [];
    //primeIndex will take the place of first index
    var primeIndex = 1;
    
    
    for(var i = 0; i<=array.length-1; i++){
       
        productExceptIndex[i] = primeIndex;
        primeIndex *= array[i];
    }
    
    primeIndex = 1;
    
    for(var j = array.length-1; j>=0;j-- ){
        console.log("primeIndex begingn j loop", primeIndex, "loop j #", j);
        productExceptIndex[j] *=primeIndex;
        primeIndex *= array[j];
        
    }
    return productExceptIndex;
    }

findProduct(array);