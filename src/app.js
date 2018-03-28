// import { isAdult, canDrink } from './person.js'
// import './utils.js'
// console.log( canDrink(21) )
// import xxx, { square ,add } from './utils.js'
// console.log( square(2))
// console.log( add(5,7))
// console.log( xxx(6,15))
// import isSenior, { isAdult, canDrink } from './person.js'
// console.log(isAdult(18))
// console.log(canDrink(21))
// console.log(isSenior(60))
// import validator from 'validator'
// console.log(validator.isEmail('kuba.it@outlook.c'))
// const react = require('react')

import React from 'react'
import ReactDOM from 'react-dom'

console.log(React)
console.log(ReactDOM)

const template = <p>Hi</p>
// const template = React.createElement('p', {}, 'Hi')

ReactDOM.render(template, document.getElementById('app'))