function task(defaultParameter) {
console.log(defaultParameter)
}

task("First - Second - Third =")  

function subNumbers(first, second, third) {

let sub = first - second - third 
return sub  
}

task(subNumbers(30, 20, 10))