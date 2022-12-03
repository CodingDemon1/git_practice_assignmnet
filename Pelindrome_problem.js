// This  js file is to check whether a word is a pelindrome or not

let word = 'racecar'

for(let i=0;i<word-1;i++){
    bag+=word[i];
}

if(bag == word){
    console.log("it is a Pelindrome");
}else{
    console.log("it is not a pelindrome");
}