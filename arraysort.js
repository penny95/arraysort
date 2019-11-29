function arraySort(list){
    let obj={};
    let evenNumbers=[];
    let oddNumbers=[];
    let myCharacters=[];
   
    if(typeof list=='string' || typeof list==='number'){
        return 'invalid input'
    }
    else{
    for(let i=0; i<list.length; i++){
        if(list[i]%2===0){
            evenNumbers.push(list[i]);
            obj['evens']=evenNumbers.sort(function(a,b){return a-b});
        }

        else if (list[i]%2===1){

        oddNumbers.push(list[i]);
        obj['odds']=oddNumbers.sort(function(a,b){return a-b});
      }
       else {
       myCharacters.push(list[i]);
       obj['chars']=myCharacters.sort();
     }
}
   return obj;
}
}

module.exports = arraySort;
