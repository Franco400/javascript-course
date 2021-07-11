let myAccount = {
    name: 'Franco Kittler',
    expenses: 0,
    income:0
}
let otherAccount = myAccount
otherAccount.income = 0
otherAccount = {}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount

} 
let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummery = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 7500)
addExpense(myAccount, 3406)
addExpense(myAccount, 650)
console.log(getAccountSummery(myAccount))
resetAccount(myAccount)
console.log(getAccountSummery(myAccount))
