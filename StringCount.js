let count=0
let inputArray=[2,1,2,3,6,8,2]

for(let i=0;i<=inputArray.length-1;i++){
    if(inputArray[i]=='2'){
        count=count+1
    }
}
console.log("The number '2' occured "+count + " times in the array" + inputArray)