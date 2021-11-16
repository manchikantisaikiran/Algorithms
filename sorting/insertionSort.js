//take one element at a time and insert it in it's correct position

function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function insertionSort(array){
    for(let i = 1;i < array.length;i++){
        let currentVal = array[i];
        let j;
        for(j = i - 1;j >= 0 && array[j] > currentVal;j--){
            array[j+1] = array[j];
        }
        array[j+1] = currentVal;
    }
    return array;
}

console.log(insertionSort([123,455,142,1000,1,9,3,76,0,-100]));