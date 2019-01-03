# pokemonAPI
REST API centered around pokemon to help get me familiar with GraphQL, very much a work in progress


## To Run
Once downloaded open up a terminal to directory of project and type 

`npm start`
 
 In a seperate terminal type in the following to start mongo server
 
 `mongod`

Once done, go to your browser and type in 

`http://localhost:3000/graphql`

## API Documentation

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

## Technologies used 

+ [MongoDB](https://github.com/mongodb/mongo) - Used for database functionality
+ [Express](https://github.com/expressjs/express) - Used for creating API, more specfically handling request endpoints
+ [Mongose](https://github.com/Automattic/mongoose) - Used for object modeling on our MongoDB data
+ [GraphQL](https://github.com/graphql/graphql-js) - Query language for our API that allows us to fetch exactly what we need, more specfically no under/over fecthing of data. Also has a really cool Type system that lets us structure how we want our datat to be formatted


