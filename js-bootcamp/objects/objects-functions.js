let myBook = {
    title: '2017',
    author: 'Trent Shelton',
    pageCount: '195'
}

let otherBook = {
    title: 'A peoles lesson',
    author: 'Franco Kittler',
    pageCount: '206'
}

let getSummery = function (book) {
    return {
        summery: `${book.title} by ${book.author}`,
        pageCountSummery: `${book.title} is ${book.pageCount} pages long`
    }
    console.log(`${book.title} by ${book.author}`)
}

let bookSummery = getSummery(myBook)
let otherBookSummery = getSummery(otherBook)

console.log(bookSummery.pageCountSummery)

// Challange area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsuis: (fahrenheit - 32) - (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)