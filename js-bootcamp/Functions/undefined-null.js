// Undefined for varaibles 
let name

name = 'jen'

if (name === undefined) {
    console.log('Please put in name')
}else {
  console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value 
let square = function (num) {
    console.log(num)
}
let result = square ()
console.log(result)

// null as assigned value 
let age = 23

age = null

console.log(age)