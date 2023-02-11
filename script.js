// define the password generator function
function generatePassword() {
// define things user might want
const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = lower.toUpperCase()
const num = '1234567890'
const symbol = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
// create a collection to store things user picked up
let collection = []
// dummy data of req.body
const options = {
  length: 12,
  lowercase: 'on',
  uppercase: 'on',
  numbers: 'on',
  symbols: 'on',
  excludeCharacters: '123456'
}

if(options.lowercase === 'on') {
    collection = collection.concat(lower.split(''))
}

if(options.uppercase === 'on') {
    collection = collection.concat(upper.split(''))
}

if(options.numbers === 'on') {
    collection = collection.concat(num.split(''))
}

if(options.symbols === 'on') {
    collection = collection.concat(symbol.split(''))
}
// remove things user do not need
if(options.excludeCharacters) {
// if the character includes in 'excludeCharacters',
// return false to remove the character in the collection
    collection = collection.filter(character => {
      return !options.excludeCharacters.includes(character)
      })      
}

// start generating password
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// make a empty string for password

let password = ''

for(let i = 0; i < Number(options.length); i ++) {
    password += sample(collection)
}
// return the generated password
console.log('password', password)
}

generatePassword()