const mongoose = require('mongoose');

const PokemonsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    img: { type: String, required: true},
   
});

const Pokemon = mongoose.model('Pokemons',PokemonsSchema);

module.exports = Pokemon;