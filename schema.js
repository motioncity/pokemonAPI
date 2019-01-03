import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type Pokemon {
  id:ID!
  name: String!
  pokedexNumber: Int!
  eggGroup: [String!]!
}

type Query {
  allPokemon: [Pokemon]
}

input PokemonInput{
  name:String!
  pokedexNumber: Int!
  eggGroup: [String!]!
}

type Mutation {
  createPokemon(input: PokemonInput) : Pokemon
}

`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;
