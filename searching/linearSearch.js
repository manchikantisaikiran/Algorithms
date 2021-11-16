function linearSearch(arr,val){
    for(let i = 0;i<arr.length;i++){
        if(val == arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([23,34,1,3],3));
