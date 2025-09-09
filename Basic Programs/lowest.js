function lowest(arr){
    var lowestNo=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<lowestNo){
            lowestNo=arr[i]
        }
    }
    return lowestNo
}

var arr=[5,3,4,6,8,7]
console.log(lowest(arr));