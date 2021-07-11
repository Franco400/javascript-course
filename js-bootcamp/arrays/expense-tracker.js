const account = {
    name: 'Franco Kittler',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
    this.income.push({
        description: description,
        amount: amount
    })
    },
    getAccountSummery: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        accountBalance = totalIncome - totalExpenses

        return `${this.name} has $${accountBalance}. $${totalIncome} in income $${totalExpenses} in expenses.`
    }
}



// expenses -> description, amount 
// addexpense -> description, ammount  
// getAccountSummery -> total up all expenses -> Franco Kittler has $1250 in expenses 

account.addExpense('rent', 15500)
account.addExpense('car', 3500)
account.addIncome('job', 65000)
console.log(account.getAccountSummery())