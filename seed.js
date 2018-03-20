const { Fight, Pokemon, Problem, User, Evolution } = require('./server/db/models');
const db = require('./server/db/db');

const users = [{
  id: 1,
  username: 'Heather',
  email: 'heatherkop320@gmail.com',
  password: 'themyscira',
},
{
  id: 2,
  username: 'Johanna',
  email: 'johanna@fullstack.com',
  password: 'starwars',
},
{
  id: 3,
  username: 'Daymis',
  email: 'daymis@fullstack.com',
  password: 'seedy123',
},
{
  id: 4,
  username: 'Veronica',
  email: 'veronica@fullstack.com',
  password: 'password',
}]

const problems = [
  {
    id: 1,
    prompt: 'Create a function returnString that takes a string and returns the same string.',
    // tests: "const assert = require('chai').assert; assert.equal(returnString('jo'), 'jo')"
    // tests: "assert.deepEqual(returnString('jo'), 'jo')"
    tests: "returnString('hello world') === 'hello world'"
  },
  {
    id: 2,
    prompt: 'Write a function doubleNum that takes an integer and returns double that integer',
    tests: "doubleNum(4) === 8"
  },
  {
    id: 3,
    prompt: 'Write a function tripleNum that takes an integer and returns double that integer',
    tests: "assert.deepEqual(tripleNum(4), 12)"
  }
]

const pokemon = [
  {
    id: 1,
    userId: 2,
    name: 'Pikachu',
    exp: 10,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pikachu.gif'
  },
  {
    id: 2,
    userId: 4,
    name: 'Charmander',
    exp: 10,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmander.gif'
  },
  {
    id: 3,
    userId: 3,
    name: 'Squirtle',
    exp: 10,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/squirtle.gif'
  }
]

const evolutions = [
  {
    id: 1,
    name: 'Pichu',
    stage: '1',
    previous: null,
    next: 'Pikachu',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pichu.gif'
  },
  {
    id: 2,
    name: 'Pikachu',
    stage: '2',
    previous: 'Pichu',
    next: 'Raichu',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pikachu.gif'
  },
  {
    id: 3,
    name: 'Raichu',
    stage: '3',
    previous: 'Pikachu',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/raichu.gif'
  },
  {
    id: 4,
    name: 'Charmander',
    stage: '1',
    previous: null,
    next: 'Charmeleon',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmander.gif'
  },
  {
    id: 5,
    name: 'Charmeleon',
    stage: '2',
    previous: 'Charmander',
    next: 'Charizard',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charmeleon.gif'
  },
  {
    id: 6,
    name: 'Charizard',
    stage: '3',
    previous: 'Charmeleon',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/charizard.gif'
  },
  {
    id: 7,
    name: 'Squirtle',
    stage: '1',
    previous: null,
    next: 'Wartortle',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/squirtle.gif'
  },
  {
    id: 8,
    name: 'Wartortle',
    stage: '2',
    previous: 'Squirtle',
    next: 'Blastoise',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/wartortle.gif'
  },
  {
    id: 9,
    name: 'Blastoise',
    stage: '3',
    previous: 'Wartortle',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/blastoise.gif'
  },
  {
    id: 10,
    name: 'Bulbasaur',
    stage: '1',
    previous: null,
    next: 'Ivysaur',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif'
  },
  {
    id: 11,
    name: 'Ivysaur',
    stage: '2',
    previous: 'Bulbasaur',
    next: 'Venusaur',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/ivysaur.gif'
  },
  {
    id: 12,
    name: 'Venusaur',
    stage: '3',
    previous: 'Ivysaur',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/venusaur.gif'
  },
  {
    id: 13,
    name: 'Pidgey',
    stage: '1',
    previous: null,
    next: 'Pidgeotto',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgey.gif'
  },
  {
    id: 14,
    name: 'Pidgeotto',
    stage: '2',
    previous: 'Pidgey',
    next: 'Pidgeot',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgeotto.gif'
  },
  {
    id: 15,
    name: 'Pidgeot',
    stage: '3',
    previous: 'Pidgeotto',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/pidgeot.gif'
  },
  {
    id: 16,
    name: 'Igglybuff',
    stage: '1',
    previous: null,
    next: 'Jigglypuff',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/igglybuff.gif'
  },
  {
    id: 17,
    name: 'Jigglypuff',
    stage: '2',
    previous: 'Igglybuff',
    next: 'Wigglytuff',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/jigglypuff.gif'
  },
  {
    id: 18,
    name: 'Wigglytuff',
    stage: '3',
    previous: 'Jigglypuff',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/wigglytuff.gif'
  },
  {
    id: 19,
    name: 'Abra',
    stage: '1',
    previous: null,
    next: 'Kadabra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/abra.gif'
  },
  {
    id: 20,
    name: 'Kadabra',
    stage: '2',
    previous: 'Abra',
    next: 'Alakazam',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/kadabra.gif'
  },
  {
    id: 21,
    name: 'Alakazam',
    stage: '3',
    previous: 'Kadabra',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/alakazam.gif'
  },
  {
    id: 22,
    name: 'Horsea',
    stage: '1',
    previous: null,
    next: 'Seadra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/horsea.gif'
  },
  {
    id: 23,
    name: 'Seadra',
    stage: '2',
    previous: 'Horsea',
    next: 'Kingdra',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/seadra.gif'
  },
  {
    id: 24,
    name: 'Kingdra',
    stage: '3',
    previous: 'Seadra',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/kindra.gif'
  },
  {
    id: 25,
    name: 'Dratini',
    stage: '1',
    previous: null,
    next: 'Dragonair',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dratini.gif'
  },
  {
    id: 26,
    name: 'Dragonair',
    stage: '2',
    previous: 'Dratini',
    next: 'Dragonite',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dragonair.gif'
  },
  {
    id: 27,
    name: 'Dragonite',
    stage: '3',
    previous: 'Dragonair',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/dragonite.gif'
  },
  {
    id: 28,
    name: 'Togepi',
    stage: '1',
    previous: null,
    next: 'Togetic',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togepi.gif'
  },
  {
    id: 29,
    name: 'Togetic',
    stage: '2',
    previous: 'Togepi',
    next: 'Togekiss',
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togetic.gif'
  },
  {
    id: 30,
    name: 'Togekiss',
    stage: '3',
    previous: 'Togetic',
    next: null,
    imageUrl: 'https://play.pokemonshowdown.com/sprites/xyani/togekiss.gif'
  },
]

function buildingUsers() {
  return Promise.all(users.map(user => User.create(user)));
}

function buildingProblems() {
  return Promise.all(problems.map(problem => Problem.create(problem)))
}

function buildingPokemon() {
  return Promise.all(pokemon.map(poke => Pokemon.create(poke)))
}

function buildingEvolutions() {
  return Promise.all(evolutions.map(mon => Evolution.create(mon)));
}

function seed() {
  return buildingUsers()
    .then(() => buildingProblems())
    .then(() => buildingPokemon())
    .then(() => buildingEvolutions())
    .catch(error => console.error('Failed to map data ', error));
}

console.log('Syncing Database')

db.sync({ force: true })
  .then(() => {
    console.log('Seeding database');
    return seed();
  })
  .then(() => console.log('Seeding Successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack)
  })
  .finally(() => {
    db.close();
    return null;
  })