<template>
    <div class="fundo">
        <div class="calc">
            <h1>Coin JS</h1>
            <div class="convert-options">
                <button class="button-option" onclick="realToUsd()">Real / Dolar</button>
                <button class="button-option" onclick="usdToReal()">Dolar / Real</button>
                <button class="button-option" onclick="btcToReal()">Bitcoin / Real</button>
                <button class="button-option" onclick="realToBtc()">Real / Bitcoin</button>
            </div>
            <div class="convert-form">
                <div>
                    <p id="input-display">Real</p>
                    <input type="text" value="1,00" id="input-value">
                </div>
                <button class="button-convert" v-on:click="convertButton()">Converter</button>
                <div>
                    <p id="output-display">Dolar</p>
                    <input type="text" id="output-value">
                </div>
            </div>

        </div>
        <!--Barra de navegação-->
        <div class="option-bar">
            <a href="/index.html"><img src="/images/calc.svg" alt="Calculadora" width="50px"></a>
            <a href="/coinJS.html"><img src="/images/dolar.svg" alt="Conversor" width="50px"></a>
            <a href="/degree.html"><img src="/images/temp.svg" alt="temperatura" width="50px"></a>
            <a href="/imc.html"><img src="/images/imc.svg" alt="Conversor" width="50px"></a>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Convert',
    data: function () {
        return{
            url:" http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL",
            mode: "RtoU",
            btn: document.getElementsByClassName("button-convert")     
        }
        

        

    },

    mounted () {
        
      

    },
    methods: {

    //API de cotações
   

    getValue: function(url) {
        let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()


        return request.responseText
    },

    //Definir modo de operação do conversor - padrão RtoU
    convertButton: function () {
        if(mode == "RtoU") {
            realToUsd()
        }

        if(mode == "UtoR") {
            usdToReal()
        }

        if(mode == "BtoR") {
            btcToReal()
        }

        if(mode == "RtoB") {
            realToBtc()
        }
    },

    realToUsd: function () {
        let jsonValues = JSON.parse(getValue(url))
        let jsonUsd = jsonValues["USDBRL"]

        mode = "RtoU"

        document.getElementById("input-display").innerHTML = "Real"
        document.getElementById("output-display").innerHTML = "Dolar"
        

        const dolarValue = parseFloat(jsonUsd["bid"])

        let realValue = document.getElementById("input-value").value

        let conversionResult = parseFloat(realValue).toFixed(2) * dolarValue

        document.getElementById("output-value").value = conversionResult.toLocaleString('en-IN', { style: 'currency', currency: 'USD' });

        return conversionResult
    },

    usdToReal: function () {
        let jsonValues = JSON.parse(getValue(url))
        let jsonUsd = jsonValues["USDBRL"]

        mode = "UtoR"

        document.getElementById("input-display").innerHTML = "Dolar"
        document.getElementById("output-display").innerHTML = "Real"
        

        const dolarValue = parseFloat(jsonUsd["bid"])

        let realValue = document.getElementById("input-value").value

        let conversionResult = parseFloat(realValue).toFixed(2) / dolarValue


        document.getElementById("output-value").value = conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return conversionResult
    },

    btcToReal: function () {

        let jsonValues = JSON.parse(getValue(url))
        let jsonUsd = jsonValues["BTCBRL"]

        mode = "BtoR"

        document.getElementById("input-display").innerHTML = "Bitcoin"
        document.getElementById("output-display").innerHTML = "Real"
        

        const dolarValue = parseFloat(jsonUsd["bid"])

        let realValue = document.getElementById("input-value").value

        let conversionResult = parseFloat(realValue).toFixed(4) * dolarValue

        document.getElementById("output-value").value = `R$ ${conversionResult},00`//conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return conversionResult

    },

    realToBtc: function () {

        let jsonValues = JSON.parse(getValue(url))
        let jsonUsd = jsonValues["BTCBRL"]

        mode = "RtoB"

        document.getElementById("input-display").innerHTML = "Real"
        document.getElementById("output-display").innerHTML = "Bitcoin"
        

        const dolarValue = parseFloat(jsonUsd["bid"])

        let realValue = document.getElementById("input-value").value

        let conversionResult = parseFloat(realValue).toFixed(2) / dolarValue.toFixed(7)

        document.getElementById("output-value").value = conversionResult.toFixed(7) //conversionResult.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return conversionResult
    },


    }

}
</script>

<style>
.calc {
    padding: 2rem 0.5rem 6rem 0.5rem !important;
}


.convert-options {
    margin-top: 0.5rem;
    margin-bottom: 5rem;
}


.button-option {
    padding: 0.5rem;
    border: none;
    margin: 0.5px;
    border-radius: 5px;
    color: #3ba392;
    font-family: 'Roboto', cursive;
    font-size: 15px;
    cursor: pointer;
    background-color: #C7C5C9;
    outline: none;
}

.button-convert {
    border: none;
    border-radius: 5px;
    font-family: 'Roboto', cursive;
    font-size: 15px;
    cursor: pointer;
    padding: 1rem 0.5rem;
    background-color: #6bd3d1;
    color: white;
    outline: none;
}

.button-option:hover {
    opacity: 50%;
}

.button-convert:hover {
    opacity: 50%;
}

.convert-form {
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

input {
    background-color: white;
    width: 9rem;
    height: 1.8rem;
    margin: 5px;
    color: rgb(105, 99, 99);
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: right;
    padding: 0.32rem;
    outline: none;
    border: none;
    border-radius: 5px;
}

@media (max-width: 860px) {
    .calc {
        padding: 2rem 1rem 4rem 1rem;
    }

    .button-option {
        padding: 0.5rem;
        margin: 0.5px;
        font-size: 12px;
    }

    input {
        background-color: white;
        width: 5rem;
        height: 1.5rem;
        margin: 5px;
        padding: 0.32rem;
    }

    .button-convert {
        font-size: 12px;
        padding: 1rem 0.45rem;
    }


}


@media (max-width: 760px) {

    .button-option {
        padding: 0.2rem;
        height: 1.7rem;
        margin: 0.5px;
        font-size: 10px;
    }
}



</style>