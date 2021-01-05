/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number>10){
            resolve();
        }
        else {
            reject('Your number is NOT greater than 10');
        }
    })
};
 
testNum(6)
    .then(() => console.log('Your number is greater than 10'))
    .catch(error => console.log(error));
  
/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(item => {return typeof item === 'string'})){
            resolve(sortWords(array.map(item => item.toUpperCase())))
        }
        else{
            reject('Not all elements of the array are strings')
        }
    });
};

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array){
            resolve(array.sort())
        }
        else {
            reject()
        }
    })    
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(complicatedArray)
    .then(result => console.log(result))
    .catch(err => console.log(err));

// call both functions, chain them together and log the result to the console