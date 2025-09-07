//let us take my name as example and count no of 'a' in it

const name='Jayaprakash'
let count=0;

for(let i=0;i<name.length;i++){
    if(name[i]=='a'){
        count++
    }
}
console.log(count)