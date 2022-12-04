// This  js file is to check whether a word is a pelindrome or not

let word = 'racecar';
let bag ='';
for(let i=word.length-1;i>=0;i--){
    bag+=word[i];
}

if(bag == word){
    console.log("it is a Pelindrome");
}else{
    console.log("it is not a pelindrome");
}