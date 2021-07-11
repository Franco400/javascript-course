// VARIABLES 

let firstName = 'Franco'
let lastName = 'Kittler'
let fullName = firstName + ', ' + lastName

console.log(fullName)

//BOOLEANS
let temp = 35

if (temp <= 15) {
   console.log('is freezing')
}

if (temp <= 35) {
    console.log('it is super hot')
}

let age = 14

if (age >= 65) {
    console.log('Entry is free')
}

if (age <= 23) {
    console.log('you pay full price')
}

//ARRAYS
//const todos = ['wake up', 'shower', 'make coffee', 'work', 'study']
const todos = [{
    text: 'Wake up',
    completed: true 
    },{
        text: 'Shower',
        completed: true
    },{
       text: 'Make coffe',
       completed: false 
    }, {
       text: 'work',
       completed: true
    },{
        text: 'Study',
        completed: false
    },{
}] 
  console.log(todos)

const notes = [{ 
    title: 'My dream list',
    body: 'To get a new bike and make money'
}, {
    title: 'How to get this done',
    body: 'Work hard and study hard'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'My dream list')
console.log(note)

const index = notes.findIndex(function (note, index) {
     console.log(note)
    return note.title === 'How to get this done'
  })
  console.log(index)

  //const note = findNote(notes, 'office modifications')
//console.log(note)

//console.log(notes.length)
//console.log(notes)

//const index = notes.findIndex(function (note, index) {
  //  console.log(note)
    //return note.title === 'Habbits to work on'
//})
//console.log(index)