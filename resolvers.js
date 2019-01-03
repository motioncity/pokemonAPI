//resolvers.js

import Pokemon from './models/pokemon';

export const resolvers = {
  Query:{
    async allPokemon(){
      return await Pokemon.find();
    }
  }
  ,
  Mutation:{
    async createPokemon(root, {
      input
    }){
      return await Pokemon.create(input);
    }
  }
}
