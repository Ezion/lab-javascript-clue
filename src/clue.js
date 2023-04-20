/*Gabriel Rabel IRONHACK wd pt 2023*/
// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 25,
    description: 'The Bad Boy, one guy who have evil espirit.',
    image: 'img/Jacob_badboy',
    color: 'Black'
  },
  {
    firstName: 'Emily',
    lastName: 'Rose',
    occupation: 'Lawyer',
    age: 32,
    description: 'A smart and cunning lawyer, who never lost a case in her career.',
    image: 'img/Emily_lawyer',
    color: 'Blue'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Professor',
    age: 40,
    description: 'A genius professor, who was fired from his job due to his misconduct.',
    image: 'img/Victor_professor',
    color: 'Purple'
  },
  {
    firstName: 'Olivia',
    lastName: 'Peacock',
    occupation: 'Socialite',
    age: 28,
    description: 'A charming socialite, who always knows the latest gossip in town.',
    image: 'img/Olivia_socialite',
    color: 'Green'
  },
  {
    firstName: 'Michael',
    lastName: 'Mustard',
    occupation: 'Colonel',
    age: 50,
    description: 'A retired colonel, who loves to tell war stories.',
    image: 'img/Michael_colonel',
    color: 'Mustard'
  },
  {
    firstName: 'Evelyn',
    lastName: 'Scarlet',
    occupation: 'Actress',
    age: 35,
    description: 'A famous actress, who has a reputation for being a diva.',
    image: 'img/Evelyn_actress',
    color: 'Red'
  }
];

console.log(suspectsArray);


// Rooms Array
const roomsArray = [
  { name: 'Kitchen' },
  { name: 'Ballroom' },
  { name: 'Conservatory' },
  { name: 'Dining Room' },
  { name: 'Cellar' },
  { name: 'Billiard Room' },
  { name: 'Library' },
  { name: 'Lounge' },
  { name: 'Hall' },
  { name: 'Study' },
  { name: 'Bedroom' },
  { name: 'Bathroom' },
  { name: 'Attic' },
  { name: 'Guest Room' },
  { name: 'Pantry' }
];

// Weapons Array

const weaponsArray = [
  { name: 'Rope', weight: 1 },
  { name: 'Knife', weight: 2 },
  { name: 'Candlestick', weight: 3 },
  { name: 'Revolver', weight: 4 },
  { name: 'Lead Pipe', weight: 5 },
  { name: 'Wrench', weight: 6 },
  { name: 'Poison', weight: 1 },
  { name: 'Bat', weight: 3 },
  { name: 'Axe', weight: 4 }
];


// ITERATION 2

function selectRandom(array)  {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickMystery() {
  let mystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  }
  return mystery;
}


// ITERATION 3

  function revealMystery({ suspect, weapon, room }) {
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
}
