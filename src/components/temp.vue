<template>
        <div class="fundo">
            <div class="calc">
                <h1>Temp Js</h1>
                <div class="convert-options">
                    <button class="button-option" v-on:click="celsiusToFahrenheit()">Celsius / Fahrenheit</button>
                    <button class="button-option" v-on:click="fahrenheitToCelsius()">Fahrenheit / Celsius</button>
                </div>
                <div class="convert-form">
                    <div>
                        <p id="input-display">Celsius</p>
                        <input type="text" value="0°C" id="input-value">
                    </div>
                    <button class="button-convert" v-on:click="convertButton()">Converter</button>
                    <div>
                        <p id="output-display">Fahrenheit</p>
                        <input type="text" id="output-value">
                    </div>
                </div>
                <div class="learning">
                    <a href="#" v-on:click="startModal()">Veja como fazer as fórmulas</a>
                </div>
            </div>  
        <!--Modal-->

            <div class="modal-container" id="modal-help">
                <div class="modal">
                    <button class="close" id="close">x</button>
                    <div class="formula">
                        <p>Celsius para Fahrenheit</p>
                        <p>(y °C × 9/5) + 32 = X °F</p>
                    </div>
                    <div class="formula">
                        <p>Fahrenheit para Celsius</p>
                        <p>(y °F − 32) × 5/9 = X °C</p>
                    </div>               
                    <p>Exemplo: y = 0°C & X = ?°F <br> (0°C x 9/5) + 32 <br> 0 + 32 <br> X = 32°F</p>
                    <p>Exemplo: y = 32°F & X = ?°C <br> (32°F - 32) x 5/9 <br> 0 x 5/9 <br> X = 0°C</p>

                </div>
            </div>
        </div>
</template>

<script>
    export default {
     name: 'Convert',

     data: function () {
         return{
             mode: "CtoF"
         }
     },

     methods: {

        convertButton: function () {
            if(this.mode == "CtoF") {
                this.celsiusToFahrenheit()
            }

            if(this.mode == "FtoC") {
                this.fahrenheitToCelsius()
            }
        },

        celsiusToFahrenheit: function () {

            document.getElementById("input-display").innerHTML = "Celsius"
            document.getElementById("output-display").innerHTML = "Fahrenheit"

            this.mode = "CtoF"

            const celsius = parseFloat(document.getElementById("input-value").value)
            document.getElementById("input-value").value = `${celsius}°C`

            let fahrenheit = celsius * 9 / 5 + 32

            document.getElementById("output-value").value = `${fahrenheit} °F`

        },

        fahrenheitToCelsius: function () {
            document.getElementById("input-display").innerHTML = "Fahrenheit"
            document.getElementById("output-display").innerHTML = "Celsius"

            this.mode = "FtoC"

            const fahrenheit = parseFloat(document.getElementById("input-value").value)
            document.getElementById("input-value").value = `${fahrenheit}°F`

            let celsius = (fahrenheit - 32) * 5 / 9

            document.getElementById("output-value").value = `${celsius.toFixed(3)} °C`
        },

        startModal: function () {
            const modal = document.getElementById("modal-help")

            modal.classList.add('show')

            modal.addEventListener('click', (e)=> {
                if(e.target.id == "modal-help" ) {
                    modal.classList.remove('show')
                }else if(e.target.id == "close") {
                    modal.classList.remove('show')
                }

            })
        }
     }   
    }
</script>

<style scoped>
    .calc {
        padding: 2rem 1rem 3rem 1rem;
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
        opacity: 0.5;
    }

    .button-convert:hover {
        opacity: 0.5;
    }

    .convert-form {
        display: flex;
        align-items: flex-end;
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

    .learning {
        margin-top: 4rem;
    }

    .learning a {
        color: whitesmoke;
        text-decoration: none;
    }


    .formula {
        padding: 1rem;
        background: turquoise;
        border-radius: 10px;
    }

    .modal-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2000;

        display: none;
        justify-content: center;
        align-items: center;
    }


    .modal {
        background: rgb(100, 119, 119);
        color: whitesmoke;
        width: 60%;
        min-width: 300px;
        padding: 4rem;
        border-radius: 20px;


        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr;

        grid-gap: 10px;

    }

    @keyframes modal {
        from {
            opacity: 0;
            transform: translate3d(0, -60px, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    .show .modal{
        animation: modal 0.3s;
    }

    .close {
        top: 0px;
        right: 0px;
        position: absolute;

        width: 3rem;
        height: 3rem;
        border: 4px solid rgb(100, 119, 119);
        background: rgb(100, 119, 119);
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 35px;
        cursor: pointer;
    }

    .modal-container.show {
        display: flex;
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

        .modal {
            width: 30%;
            min-width: 250px;
            padding: 2.8rem;
            border-radius: 20px;
        
        
            position: relative;
        
            display: grid;
            grid-template-columns: 1fr 1fr;
        
            grid-gap: 10px;
        
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