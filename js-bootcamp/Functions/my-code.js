// Write a code with everything you have learned 
// car brand,HP - BHP,Colour,specials on spesific vehicles

let make = 'Ferrari'
let model = '458 Italia'
let makeAndModel = (make + ', ' + model)

console.log(makeAndModel)

let carColourOne = 'yellow'
let carColourTwo = 'blue'
let carColourThree = 'black'

if (carColourOne) {
    console.log('Red you will get a 5% discount')
}if (carColourTwo) {
    console.log('Blue you will receive a free set of rims')
}if (carColourThree) {
    console.log('Black you will get red stitching on the interior and a set of rims')
}

let speed = 120
if (speed >= 120) {
    console.log('You are driving on the speed limit')
}if (speed >= 160) {
    console.log('You are over the speed limit casing you to get a speeding fine')
}if (speed <= 60) {
    console.log('You are driving very slow speed up')
}

carColourOne = 'red'

if (true) {
carColourOne = 'red'
console.log(carColourOne)
}carColourTwo = 'blue'
if (true) {
    console.log(carColourTwo)
}

let studentScore = function (score, totalScore) {
 let percent = (score / totalScore) * 100
 let letterGrade = ''

if (percent >= 90) {
    letterGrade = 'A'
}else if (percent >= 80) {
    letterGrade = 'B'
}else if (percent >= 70) {
    letterGrade = 'C'
}else if (percent >= 60) {
    letterGrade = 'D'
}

return `You got a ${letterGrade} (${percent}%)!`
}
let result = studentScore(9, 20)
console.log(result)

let car = function (colour, discount) {
    let extras = (colour === discount)
    let code = '' 

    if (colour >= discount) {
        code = 'Red'
    }else if (colour >= discount) {
        code = 'Blue'
    }else if (colour <= discount){
        code = 'Black'
    }
    return `You qualify for a ${code}${colour}% discount on the red one!`
}
let resultOne = car(5)
console.log(resultOne)

let myVehicle = {
    make: 'Ford',
    model: 'Focus 1.0 ecoboost',
    yearModel: 2016
}
console.log(`This beautiful ${myVehicle.yearModel} ${myVehicle.make} ${myVehicle.model} for only R169 900`)


//let otherVehicle = {
//make: 'Bmw',
    //model: 'M135',
    //yearModel: '2020'
//}
//let getSummery = function (vehicle) {
  //  return {
    //    summery: `${make.model} for only R169 900`,
      //  yearModelSummery: `${otherMake.otherModel} for only R890 900`
    //}
//}
//console.log(`This beautiful ${make.make} ${make.model}`)

//let vehicleSummery = getSummery(myVehicle)
//let otherVehicleSummery = getSummery(otherVehicle)

//console.log(vehicleSummery.yearModelSummery)
