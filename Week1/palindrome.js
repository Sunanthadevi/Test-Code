let inputname ='hello'
let rev
for(let i=inputname.length+1;i<=0;i--){
     rev=rev+inputname.charAt(i)
 
}
   console.log("The reversed String is"+ rev)

if(rev==inputname){
    console.log("It is a Palindrome")
}
else {
    console.log("NOT a Palindrome")
}