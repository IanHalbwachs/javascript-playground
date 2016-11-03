// Don't worry about what this line does
"use strict";

// Function that does nothing except returns undefined.
// This one is my treat, I did it for you :P
function noop() {
    return;
}

// This method returns the first argument it receives.
// identity(3) => 3
// identity(null) => null
function identity(item) {
	return item;
}

// Returns whether N is odd;
// isOdd(5) => true
// isOdd(6) => false
function isOdd(n) {
	return n % 2 !== 0;
}

// Returns whether N is even;
// isEven(5) => false
// isEven(6) => true
function isEven(n) {

}

// Returns first item of an array
// head([1,2,3]) => 1
function head(array) {

}

// Returns last item of an array
// last([1,2,3] => 3
function last(array) {

}

// Returns the element at index n of array. If n is negative, the nth element from the end is returned.
function nth(array, n) {

}

// Returns a slice of array with n elements taken from the beginning.
// take([1,2,3], 2) => [1, 2]
function take(array, n) {

}

// Returns a slice of array with n elements taken from the end.
// takeRight([1,2,3,4,5], 3) => [3,4,5]
function takeRight(array, n) {

}

// Returns an array containing all but the last element of array.
// initial([1,2,3]) => [1, 2]
function initial(array) {

}

// Similar to initial, except returns an array containing all but the first element of array.
// tail([1, 2, 3]) => [2, 3]
function tail(array) {

}

// Returns the sum of the numbers in array
// sum([1,2,3]) => 6
function sum(array) {

}

// Returns the sum of the odd values in array
// oddSum([1,2,1,1,1,1]) => 5
// oddSum([10]) => 0
// oddSum([11]) => 11
function oddSum(array) {

}

// Returns the largest number in the array
// max([1,2,3]) => 3
function max(array) {

}

// Returns the smallest number in the array
// min([1,2,3]) => 1
function min(array) {

}

// Returns the mean of the the array
// mean([4, 2, 8, 6]) => 5
function mean(array) {

}

// Fills elements of array with value from start up to, but not including, end.
// IMPORTANT: This function modifies the array that you pass it.
// It does not return a new array, it returns the same array that was passed in, except modified.
// start and end are optional parameters
// fill([1,2,3], 'a')  => ['a', 'a', 'a']
// fill([1,2,3], 'a', 1)  => [1, 'a', 'a']
// fill([4, 6, 8, 10], '*', 1, 3) => [4, '*', '*', 10]
function fill(array, value, start, end) {

}

// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
// Returns a new array reversed, DOES NOT modify existing array.
// HINT: You've tried looping starting with index = 0, when happens if you start looping with index === end of array
// reverse([1,2,3]) => [3,2,1];
function reverse(array) {

}
