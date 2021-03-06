//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// Array Documentation: http://www.w3schools.com/jsref/jsref_obj_array.asp

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
console.log("Question 1");

var cars = [];
cars.unshift('Honda');
cars.push('BMW');
cars.splice(0,0,['Tesla', 'VW']);

console.log('Fun Cars: ' + cars);
< "Fun Cars: Tesla,VW,Honda,BMW"
// 2. Add an additional item to the beginning of your Array.
console.log("Question 2");

cars.unshift('Acura');

console.log('Fun Cars: ' + cars);
< "Fun Cars: Acura,Tesla,VW,Honda,BMW"
// 3. Remove the second and third items.
console.log("Question 3");

cars.splice(1,1);

console.log('Fun Cars: ' + cars);
< "Fun Cars: Acura,Honda,BMW"
// 4. Add two new items after the second item.
console.log("Question 4");

cars.splice(2,0,['Tesla', 'VW']);

< "Fun Cars: Acura,Honda,Tesla,VW,BMW"
// 5. Write 'The current length of the array is....' using the .length method
console.log("Question 5");

console.log(cars.length + 1);
< 5
// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
console.log("Question 6");

things[2] = 'keyboard';

console.log(things)
< ["mug", "book", "keyboard", "plant", "sunglasses"]
// 7. Combine all of the elements of the array into a string.
console.log("Question 7");

console.log("Above Array into a String: " + things[0] + ", " + things[1] + ", " + things[2] + ", " + things[3] + ", " +  things[4] + "." )
< "Above Array into a String: mug, book, keyboard, plant, sunglasses."
// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
console.log("Question 8");

var lastItem = Array(things.pop());

console.log(lastItem);
< ["sunglasses"]

lastItem.push('latte');
lastItem.unshift('cookie');

console.log(lastItem)
< ["cookie", "sunglasses", "latte"]
// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
console.log("Question 9");

var itemLast = lastItem.reverse();

console.log(itemLast)
< ["latte", "sunglasses", "cookie"]
// 10. Remove the first item of itemLast.
console.log("Question 10");

var firstItem = Array(itemLast.shift());

console.log(firstItem)
< ["latte"]
// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
console.log("Question 11");

console.log(itemLast)
< ["sunglasses", "cookie"]

itemLast.splice(0,2)

console.log(itemLast)
< []
// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

console.log("Question 12");

var numberPets = firstArray.concat(secondArray);

console.log(numberPets);
< [12, 5, 9, 27, "fish", "dog"]
// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
console.log("Question 13");

people.push("Joe","Dirt")

console.log(people)
< ["Bill", "Ted", "Emily", "Andrea", "Doug", "Joe", "Dirt"]
// 14. Remove everybody except 'Andrea' and 'Ted'
console.log("Question 14");

console.log("BFF: " + people[1] + " and " + people[3] + "!")
< "BFF: Ted and Andrea!"
// 15. Add a new person to the beginning of the Array
console.log("Question 15");

people.unshift("Chloe")
console.log(people)
< ["Chloe", "Bill", "Ted", "Emily", "Andrea", "Doug", "Joe", "Dirt"]
// 16. Arrange the items alphabetically. Store this Array as orderedPeople
console.log("Question 16");

people.sort();

console.log(people)
< ["Andrea", "Bill", "Chloe", "Dirt", "Doug", "Emily", "Joe", "Ted"]
// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

console.log("Question 17");

var array4 = [];
array4.unshift(array1, array2, array3);

console.log(array4);
< [Log] [["Fido", "Spot", "Rex"], ["Bulldog", "Lab", "Dalmation", "Beagle"], ["Black", "Spotted", "Tri-color"]]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.
console.log("Question 18");

array1.pop()
array3.shift()

console.log(array4);
< [["Fido", "Spot", "Rex"], ["Bulldog", "Lab", "Dalmation", "Beagle"], ["Black", "Spotted", "Tri-color"]]
// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]

console.log(sortingNumbers.sort())
< [2, 300, 5, 55, 77, 98]

// Explain why it doesn't sort as expected.
Because '300' comes before '5' in Unicode code point order, You need a function to sort!

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var array2 = array1;

array2.splice(2, 1);
array2.splice(4, 1);
array2.sort().unshift(array2.pop());

console.log(array2);
< ["plant", 17, 2, "Bill", "dog"]
//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
