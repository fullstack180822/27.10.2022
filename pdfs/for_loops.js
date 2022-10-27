/*
Write a function `printNumbers()` that prints all numbers between 1 to 10 using a for loop.
*/
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}`);
    }
}
//printNumbers()

/*
Write a function `deleteElement()` that deletes all the occurrences of the given element from
the given array.
for example: var arr = [23,56,4,78,5,63,45,210,56] and number 4
if the given number appears in the array your function should delete
Ex3:
Write
*/
function deleteElement(arr, e) {
    // 0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === e) {
            arr.splice (i, 1)
        }
    }
    return;
    // 1    
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === e) {
            arr.splice (i, 1)
        }
    }
    // 1.5
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            arr.splice (i--, 1)
        }
    }    
    // 2
    for (let i = 0; true;) {
        if (arr[i] === e) {
            arr.splice (i, 1)
        }
        else {
            i++;
            if (i >= arr.length) { return }
        }
    }
}
//var arr = [23,56,4,4,78,5,63,45,210,56,4] 
//deleteElement(arr, 4)
//console.log(arr);

/*
Write a function that receives an array of integers and returns how many numbers are odd
and how many are even.
Return an object the contain this data
*/
function odd_even(arr) {
    let odds = 0
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odds ++
        }
        else {
            even ++
        }
        // shortcuts [optional]:
        //odds += arr[i] % 2 == 1 ? 1 : 0
        //even += arr[i] % 2 == 0 ? 1 : 0
    }
    //return { 'num_of_odds': odds, 
    //         'num_of_even': even }
    //return { 'odds':odds, 'even': even }  
    return { odds, even }
}
var arr = [23,56,4,4,78,5,63,45,210,56,4] 
console.log(odd_even(arr, 4))

// another way to solve it ....
// **etgar
function odd_even_another_way(arr) {
    const result = { odds: 0, even: 0 }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.odds++
        }
        else {
            result.even++
        }
    }
    return result
}
var arr = [23,56,4,4,78,5,63,45,210,56,4] 
console.log(odd_even(arr, 4))

