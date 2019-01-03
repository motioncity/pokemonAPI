# pokemonAPI
REST API centered around pokemon to help get me familiar with GraphQL, very much a work in progress


# To Run
Once downloaded open up a terminal to directory of project and type 

`npm start`
 
 In a seperate terminal type in the following to start mongo server
 
 `mongod`

Once done, go to your browser and type in 

`http://localhost:3000/graphql`

# API Documentation

As of right now there are only two types of operations you can run 

`type Query {
  allPokemon: [Pokemon]
}`
which returns all pokemon in database

`type Mutation {
  createPokemon(input: PokemonInput) : Pokemon
}`

Which allows you to create a pokemon in the database using a PokemonInput as the input

A pokemon input is defined as followed

`input PokemonInput{
  name:String!
  pokedexNumber: Int!
  eggGroup: [String!]!
}`

Planning to add more operations
