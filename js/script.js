const Modal = {
    openClose() {
        document.querySelector('.modal-overlay')
        .classList.toggle('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Rent',
        amount: -50000,
        date: '08/15/2021'
    },
    {
        id: 1,
        description: 'Website creation',
        amount: 500000,
        date: '08/15/2021'
    },
    {
        id: 1,
        description: 'Internet',
        amount: -20000,
        date: '08/15/2021'
    },
]

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saídas
    },
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remove Transaction"></td>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("en-US", {
            style: "currency", 
            currency: "USD"
        })
        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})