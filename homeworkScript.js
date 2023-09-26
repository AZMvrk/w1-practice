function homework(defaultParameter) {
console.log(defaultParameter)
}

homework("First - Second - Third =")  

function subNumbers(first, second, third) {

let sub = first - second - third 
return sub  
}

homework(subNumbers(30, 20, 10))