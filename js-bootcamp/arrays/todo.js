//const todos = ['Wake up', 'Shower', 'Make coffee', 'Start vehicle', 'Drive to work']

const todos = [{
    text: 'Wake up',
    completed: true,
    }, {
        text: 'Shower',
        completed: false
    }, {
        text: 'Make coffee',
        completed: false
    }, {
        text: 'Start vehicle',
        completed: true
    }, {
        text: 'Drive to work',
        completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed  && b.completed) {
            return -1
        }else if (!b.completed && a.completed) {
            return 1
        }else  {
            return 0
        }
    })
}

const deleteTodo = function (todos, todosText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todosText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))












// 1. Convert array to array of objects -> text, completed 
// 2. Create function to remove a todo by text value 

//deleteTodo(todos, 'Make coffee')
//console.log(todos)

// todos.splice(2, 1)
// todos.push('Hurry up')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)

// // 1. The first item
// // 2. The second item

// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })
