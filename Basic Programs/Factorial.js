function fact(no){
    if(no==1){
        return 1
    }else{
        return no*fact(no-1)
    }
}
console.log(fact(5));
