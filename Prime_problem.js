// This js file to check a number whether it is prime or note

let n = 89;
for(let i=1; i<=n ;i++){
    if(n%i ==0){
        count++
    }
}

if(count == 2){
    console.log("It is a Prime Number")
}else{
    console.log("it is not a Prime Number")
}