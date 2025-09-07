const mixed=[1,'a',2,'d',4,'l','d',7]

const letters=[]
const numbers=[]
let charCount=0;
let NoCount=0;

for(let i=0;i<mixed.length;i++){
    if(typeof(mixed[i])=='string'){
        letters.push(mixed[i])
        charCount++
    }else{
        numbers.push(mixed[i])
        NoCount++
    }
}

console.log('letters array',letters);
console.log('numbers array',numbers);

console.log('there are',charCount,'letters are there');
console.log('there are',NoCount,'letters are there');

