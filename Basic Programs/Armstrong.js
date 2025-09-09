function checkarmstrong(no){
    let a=String(no).length
    let b=String(no)
    var num=0;
    for(let i=0;i<a;i++){
        num+=b[i]**a
    }
    if(num===no){
        return "yes it is armStrong No."
    }else{
        return "No it is not armStrong No."
    }
}

console.log(checkarmstrong(153));