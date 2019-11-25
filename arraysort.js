function arraySort(list){
    let obj={};
    let evenNumbers=[];
    let oddNumbers=[];
    let myCharacters=[];
   
    for(let i=0; i<list.length; i++){
        if(list[i]%2===0){
            evenNumbers.push(list[i]);
            obj['even']=evenNumbers.sort(function(a,b){return a-b});
        }

        else if (list[i]%2===1){

        oddNumbers.push(list[i]);
        obj['odd']=oddNumbers.sort(function(a,b){return a-b});
    }
    else {
    myCharacters.push(list[i]);
    obj['char']=myCharacters.sort();
    }
}
   return obj;
}

console.log(arraySort([4, 9, 2, 6, 3, 5, 1, 'd', 'a', 'c', 'f', 8]));

module.exports = arraySort;
