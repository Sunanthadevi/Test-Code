let browserName="chrome"
if(browserName=='chrome'){
    console.log("Browser launched")
}
else if(browserName=='edge'){
    console.log("Not supported")
}
else{
    console.log("browser cannot be launched in firefox")
}
let testtype="regr"

switch(testtype){
    case 'regr':
        console.log("regression")
        break
    case 'UAT':
        console.log("UAT")
        break
    case 'inte':
        console.log("Integrtion")
        break
    default :
        console.log('smoke')
}