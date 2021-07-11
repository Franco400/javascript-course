// multiple arguments

let add = function (a, b, c) {
return a + b + c
}
let result = add(23, 26, 49)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymus', score = 0) {
    //return 'name: ' + name + ' -score ' + score 
    return `name: ${name} - score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challange area 
// A 25% tip on R40 would be R10
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `a ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(180, .25)
console.log(tip)



