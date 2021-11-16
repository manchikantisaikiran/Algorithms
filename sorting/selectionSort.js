//it places smaller values into it's position one at a time

function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array){
    const n = array.length;
    for(let i = 0;i<n;i++){
        let minIndex = i;
        for(let j = i+1;j<n;j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        if(array[i] > array[minIndex]){
            swap(array,i,minIndex)
        }
    }
    return array;
}

console.log(selectionSort([123,455,142,1000,1,9,3,76,0,-100]));