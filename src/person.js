console.log('person.js is running')

export const isAdult = (age) =>  age < 18 ? false : true;
export const canDrink = (age) =>  age < 21 ? false : true;


export default (age) => age >= 60