function checkprime(no){
    for(let i=2;i<no;i++){
        if(no%i==0){
            return "not prime"
        }
    }
    return "prime"
}

const num=parseFloat(process.argv[2])
console.log(checkprime(num));
