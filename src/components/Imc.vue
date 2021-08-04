<template>
    <div class="fundo">
        <div class="calc">
            <h1>IMC Js</h1>
            <div class="convert-form">
                <div>
                    <p id="input-display">Altura</p>
                    <input type="text" id="input-height">
                </div>
                <div>
                    <p id="output-display">Peso</p>
                    <input type="text" id="input-weight">
                </div>
                <button class="button-convert" v-on:click="calculate()">Converter</button>
            </div>

            <div class="display">
                <p id="value-imc"></p>
                <p id="reference"></p>
            </div>

            <a href="https://www.tuasaude.com/calculadora/imc/" id="link" target="_blank">Veja mais sobre IMC</a>

        </div>
    </div>
</template>


<script>
export default {
    name: 'Imc',

    methods: {

    calculate: function () {

        let height = document.getElementById("input-height").value
        let weight = document.getElementById("input-weight").value



        let imc = parseFloat(weight) / (parseFloat(height.replace(',', '.')) * parseFloat(height.replace(',', '.'))).toFixed(2)

        document.getElementById("value-imc").innerHTML = `Seu IMC é: ${imc.toFixed(2)}`

        if(imc < 18.5) {
            document.getElementById("reference").innerHTML = "Magreza <br> Você precisa ganhar peso"

        }else if(imc >= 18.5 && imc < 24.9 ) {
            document.getElementById("reference").innerHTML = "Normal <br> Você está no peso ideal"

        }else if(imc >= 24.9 && imc < 30) {
            document.getElementById("reference").innerHTML = "Sobrepeso <br> Você Precisa perder peso"

        }else if(imc > 30) {
            document.getElementById("reference").innerHTML = "Obesidade <br> Você Precisa perder peso"
        }

        console.log(imc)

        console.log(height.value)

        }
    }
}
</script>


<style scoped>
    .calc {
        padding: 2rem 2rem 1.5rem 2rem;
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
        width: 8rem;
        background-color: #6bd3d1;
        color: white;
        outline: none;
        margin-top: 1rem;
    }

    .button-option:hover {
        opacity:100;
    }

    .button-convert:hover {
        opacity: 100;
    }

    .convert-form {
        margin-top: 1rem;
        display: block;
        align-items: center;
    }

    input {
        background-color: white;
        width: 12rem;
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
        margin-top: 0.5rem;
    }

    .display {
        color: rgb(105, 99, 99);
        background-color: white;
        border-radius: 5px;

        text-align: center;
        margin-top: 1rem;
        height: 5rem;
        width: 14rem;

        margin-bottom: 1rem;

    }

    #link {
        color: white;
        text-decoration: none;
    }

</style>