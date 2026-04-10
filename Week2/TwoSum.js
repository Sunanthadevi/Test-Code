let numarray=[2,4,11,8,10,7]
let target=18
let indices=[]

for(let i=0;i<=numarray.length-1;i++){
    for(let j=0;j<=numarray.length-1;j++)
    {
        if(numarray[i] + numarray[j]==target){
           indices.push([i,j])
           // console.log(numarray[i] + " and " + numarray[j]+' at index '+ i + ' and ' +j) 
        }
    }
    
}
console.log(indices)

