//an algorithm where the largest values bubble to the top one at a time

function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array){
    let noswaps;
    let count = 0;
    for(let i = 0;i<array.length;i++){
        noswaps = true;
        for(let j = 0;j<array.length - i - 1;j++){
            if(array[j] > array[j+1]){
                // swap(array,j,j+1);
                [array[j],array[j+1]] = [array[j+1],array[j]]; //ES2015
                noswaps = false;
            }
            count++;
        }
        if(noswaps){
            break;
        }
    }
    console.log(count);
    return array;
}

// console.log(bubbleSort([123,455,142,1000,1,9,3,76,0,-100]))
console.log(bubbleSort([8,1,2,3,4,5,6,7]))