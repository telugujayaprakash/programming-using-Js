//using built-in methods
function checkpalindrome(str){
    const revstr=str.split('').reverse().join('')
    if(str==revstr){
        console.log("yes",str,"is palindrome")
    }else{
        console.log("yes",str,"is not palindrome")
    }
}
const inputstr1=process.argv[2]
checkpalindrome(inputstr1)



//without using built-in methods
function ispalindrome(str){
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            console.log("Not palindrome")
            return 
        }
        left++;
        right--;
    }
    console.log('palindrome');
}
const inputstr2=process.argv[2]
ispalindrome(inputstr2)