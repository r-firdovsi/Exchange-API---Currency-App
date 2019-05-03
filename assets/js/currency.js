class Currency {
    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const finalAmount = Number(this.amount);

                let total = parity * finalAmount;
                resolve(total);
            })
            .catch(err => reject(err));
            })
    }

    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}