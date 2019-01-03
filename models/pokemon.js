//models/product.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  pokedexNumber:{
    type: Number,
    required:true
  },
  eggGroup:{
    type:[String],
    required:true
  }
})

export default mongoose.model('pokemon', PokemonSchema);
