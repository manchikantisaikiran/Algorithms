//O(n^2)
let count = 0;
function countOfSubStrOccurances(str,substr){
    for(let s1 = 0;s1<str.length;s1++) {
        for(let s2 = 0;s2<substr.length;s2++){
            if(substr[s2] !== str[s1 + s2]){
                break;
            }
            if(s2 === substr.length - 1){
                count++;
            }
        }
    }
    return count;
}

console.log(countOfSubStrOccurances('wowomgzomg','o'));