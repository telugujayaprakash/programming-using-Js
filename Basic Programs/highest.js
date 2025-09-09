function highest(arr){
    var highestNo=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            highestNo=arr[i+1]
        }
    }
    return highestNo
}

var arr=[5,3,4,6,8,7]
console.log(highest(arr));