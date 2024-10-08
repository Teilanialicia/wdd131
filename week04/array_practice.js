
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(function(name){
    return name.charAt(0) === "B"
});

console.log(namesB);

// so, filter, map and reduce are array methods (functions built into javascript) 
// that use "callback" functions do something to the array

// for filter it creates a new array with only the array items that matched 
// what you are looking for (it automaitcally looks for a True or False so you dont have to make an if statement)
// filtered with only the numbers that are even (like in the example below)

function evenOrOdd(number){
    return number % 2 === 0
}

let numbers = [1,2,3,4,5];

let numbersEven = numbers.filter(evenOrOdd);

console.log(numbersEven);