const axios = require("axios");

const Poke = async () => {
    
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/{4}/');
    console.log(response.data)
}

Poke();

document.addEventListener('DOMContentLoaded', (event) =>{
    const form = document.getElementById('form')

    var idPK = document.getElementById("idPK")
    var nombre = document.getElementById("nombre")
    var tipo = document.getElementById("tipo")
    var altura = document.getElementById("altura")
    var peso = document.getElementById("peso")

    form.addEventListener('submit', function (event){
        event.preventDefault();

        const buscar = form.elements['ids'].values;

        


        



    })



})
