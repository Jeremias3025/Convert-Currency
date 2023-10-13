const buttonToConvert = document.querySelector('.convertButton')
const CurrencySelect = document.querySelector('.Coin-select')


function ConvertValue(){

    const ValueToConvert = document.querySelector('.ValorAConverte').value //Valor a Converte
    const CurrencyReal = document.querySelector('.ValorEmReal')
    const CurrencyConvertede = document.querySelector('.ValorConvertido')

    const DolarToDay = 5.2
    const EuroToDay = 6.2
    const FrancoToDay = 5.43

    if (CurrencySelect.value == 'dolar') {
        CurrencyConvertede.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(ValueToConvert / DolarToDay);

    }

    if (CurrencySelect.value == 'euro') {
        CurrencyConvertede.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(ValueToConvert / EuroToDay)

    }

    if (CurrencySelect.value == 'franco') {
        CurrencyConvertede.innerHTML = new Intl.NumberFormat('fr-FR', {
            style: 'currency', currency: 'CHF'
        }).format(ValueToConvert / FrancoToDay)

    CurrencyReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(ValueToConvert);
}

}

function ChangeCurrency() {
    const Paragrafo = document.getElementById('CurrencyMoney')
    const Flag = document.querySelector('.flag-currency')

    if (CurrencySelect.value == 'dolar') {
        Paragrafo.innerHTML = 'US$ Dolar Americano'
        Flag.src = './assets/Dolar.png'
    }

    if (CurrencySelect.value == 'euro') {
        Paragrafo.innerHTML = '€ Euro'
        Flag.src = './assets/Euro.png'
    }

    if (CurrencySelect.value == 'franco') {
        Paragrafo.innerHTML = 'Franco Suiço'
        Flag.src = './assets/Franco suiço.jpg'
    }
}


CurrencySelect.addEventListener('change', ChangeCurrency)
buttonToConvert.addEventListener("click", ConvertValue)
