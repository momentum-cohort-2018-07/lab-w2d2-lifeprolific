// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
  var output = 0
  for (var index = 0; index < numbers.length; index++) {
    output += numbers[index]
  }
  return output
}

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
  var output = 0
  if (numbers.length > 0) {
    for (var index = 0; index < numbers.length; index++) {
      output += numbers[index]
    }
    return output / numbers.length
  }
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection(array1, array2) {
  var output = []
  for (var index1 = 0; index1 < array1.length; index1++) {
    for (var index2 = 0; index2 < array2.length; index2++) {
      if (array1[index1] === array2[index2] && !output.includes(array1[index1])) {
        output.push(array1[index1])
      }
    }
  }
  return output
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
  var output = undefined
  for (var index = 0; index < numbers.length; index++) {
    var thisNumber = numbers[index]
    if (typeof (output) === 'undefined') {
      output = thisNumber
    }
    else if (thisNumber < output) {
      output = thisNumber
    }
  }
  return output
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(arrayInput) {

  var arrayCopy = arrayInput.slice(0)

  // iterate through whole array
  for (var index1 = 0; index1 < arrayCopy.length; index1++) {

    //iterate through remainder of array to find next minimum
    var minimumIndex = index1
    for (var index2 = index1; index2 < arrayCopy.length; index2++) {
      if (arrayCopy[index2] < arrayCopy[minimumIndex]) {
        minimumIndex = index2
      }
    }

    //remove next minimum from array and add to beginning of array
    var minimum = arrayCopy[minimumIndex]
    arrayCopy.splice(minimumIndex, 1)
    arrayCopy.splice(index1, 0, minimum)
  }

  return arrayCopy
}

// Greg's note: this works, but in a kindof opposite-land way
function selectionSortOpposite(arrayInput) {

  var arrayCopy = arrayInput.slice(0)

  // iterate through whole array
  for (var index1 = 0; index1 < arrayCopy.length; index1++) {

    //iterate through remainder of array to find next minimum
    var minimumIndex = index1
    for (var index2 = index1; index2 < arrayCopy.length; index2++) {
      if (arrayCopy[index2] > arrayCopy[minimumIndex]) {
        minimumIndex = index2
      }
    }

    //remove next minimum from array and add to beginning of array
    var minimum = arrayCopy[minimumIndex]
    arrayCopy.splice(minimumIndex, 1)
    arrayCopy.unshift(minimum)
  }

  return arrayCopy
}

// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser(nameInput, dateInput) {
  var output = { name: nameInput, dob: dateInput }
  return output
}

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

function calculateAge(userInput, dateInput) {

  function howOld(birthDate, currentDate) {
    if (birthDate > currentDate) {
      return
    }
    else {
      return Math.floor(jSDateToGTDate(currentDate) - jSDateToGTDate(birthDate))
    }

    function jSDateToGTDate(date) {
      return date.getFullYear() + 0.01 * date.getMonth() + .0001 * date.getDate()
    }
  }

  return howOld(userInput.dob, dateInput)
}

// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.
