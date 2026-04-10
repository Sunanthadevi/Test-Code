let arr1=[1,2,3,4,5,6,6]
let arr2=[5,4,6,7,4]
let results=[]

function intersection(arr1,arr2){
for(let i=0;i<=arr1.length-1;i++){
    for(let j=0;j<=arr2.length-1;j++){
        if(arr1[i]==arr2[j]){
            if((arr2.includes(arr1[i]) && !(results.includes(arr1[i])))){
                results.push(arr1[i])
            }
        }
 
    }

}
return results
}
intersection(arr1,arr2)
console.log(results)