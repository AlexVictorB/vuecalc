<template>
        <div class="fundo">
            <div class="calc">
                <h1>Calculadora JS</h1>
                <input type="text" id="display">
                <table>
                    <tr>
                        <td><button class="button-func" v-on:click="clean()">C</button></td>
                        <td><button class="button-func" v-on:click="back()">--</button></td>
                        <td><button class="button-func" v-on:click="insert('/')">/</button></td>
                        <td><button class="button-func" v-on:click="insert('*')">x</button></td>
                    </tr>
                    <tr>
                        <td><button class="button-func" v-on:click="insert('7')">7</button></td>
                        <td><button class="button-func" v-on:click="insert('8')">8</button></td>
                        <td><button class="button-func" v-on:click="insert('9')">9</button></td>
                        <td><button class="button-func" v-on:click="insert('-')">-</button></td>
                    </tr>
                    <tr>
                        <td><button class="button-func" v-on:click="insert('4')">4</button></td>
                        <td><button class="button-func" v-on:click="insert('5')">5</button></td>
                        <td><button class="button-func" v-on:click="insert('6')">6</button></td>
                        <td><button class="button-func" v-on:click="insert('+')">+</button></td>
                    </tr>
                    <tr>
                        <td><button class="button-func" v-on:click="insert('1')">1</button></td>
                        <td><button class="button-func" v-on:click="insert('2')">2</button></td>
                        <td><button class="button-func" v-on:click="insert('3')">3</button></td>
                        <td rowspan="2"><button class="button-func" style="height: 106px;" v-on:click="calc()">=</button></td>
                    </tr>
                    <tr>
                        <td colspan="2"><button class="button-func" style="width: 106px;">0</button></td>
                        <td><button class="button-func" v-on:click="insert('.')">.</button></td>
                    </tr>
                </table>
            </div>
        </div>

</template>

<script>

    export default{
        name: 'Calc',
        methods: {
            insert: function(num) {
                
                let display = document.getElementById('display').value;

                document.getElementById('display').value = display + num
            },

            back: function() {

                let display = document.getElementById('display').value;

                document.getElementById('display').value = display.substring(0, display.length -1);
            },

            clean: function() {

                document.getElementById('display').value = "";
                
            },

            calc: function() {

                
                let display = document.getElementById('display').value;

                if(display) {
                    document.getElementById('display').value = eval(display)
                }
                else {
                    document.getElementById('display').value = ""
        }
            }
        }
    }
        

    function insert(num) {

        let display = document.getElementById('display').value;

        document.getElementById('display').value = display + num

    }

    function clean() {
        
        document.getElementById('display').value = "";
    }

    function back() {

        let display = document.getElementById('display').value;

        document.getElementById('display').value = display.substring(0, display.length -1);
    }

    function calc() {

        let display = document.getElementById('display').value;

        if(display) {
            document.getElementById('display').value = eval(display)
        }
        else {
            document.getElementById('display').value = ""
        }
    }



    function keyboardMap(e) {

        let key = e.key

        const keysList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", ".", "Enter", "Escape", "Backspace"]


        if (keysList.indexOf(key) == key) {
            //console.log(key)
            insert(key)
            //console.log(keysList)
        } else if (key == 'Backspace') {
            back()
        }else if (key == 'Escape') {
            clean()
        }else if (key == 'Enter') {
            calc()
        }else if (key == '+') {
            insert('+')
        }else if (key == '-') {
            insert('-')
        }else if (key == '*') {
            insert('*')
        }else if (key == '/') {
            insert('/')
        }else if (key == '.') {
            insert('.')
        }
        
    }

    document.addEventListener('keydown', keyboardMap)
</script>

<style scoped>
.calc {
    padding: 2rem 2rem 3rem 2rem;
}

table {
    display: block;
}

.button-func {
    width: 3rem;
    height: 3rem;
    border: none;
    margin: 0.05rem;
    border-radius: 5px;
    color: #3ba392;
    font-family: 'Staatliches', cursive;
    font-size: 25px;
    cursor: pointer;
    background-color: #C7C5C9;
    outline: none;
}

.button-func:hover {
    opacity: 100;
}


#result {
    background-color: white;
    width: 200px;
    height: 30px;
    margin: 5px;
    color: rgb(105, 99, 99);
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    text-align: right;
    padding: 5px;
    outline: none;
}

#display {
    background-color: white;
    width: 195px;
    height: 2.5rem;
    margin: 5px;
    color: rgb(105, 99, 99);
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    text-align: right;
    padding: 5px;
    border: none;
    outline: none;
}
</style>