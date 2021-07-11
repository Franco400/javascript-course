// Function-input (argument),code,output (return value)

let greetUser = function () {
    console.log('Welocme user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
let result = num * num
return result 
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// challange area 

// convertfahrenheittocelcuis 

// call a couple of times (32 - 0) (68 - 20)

let convetFahrenheitToCelsuis = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convetFahrenheitToCelsuis(32)
let tempTwo = convetFahrenheitToCelsuis(68)

console.log(tempOne)
console.log(tempTwo)