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
            arr.splice(i, 1)
        }
    }
    return;
    // 1    
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === e) {
            arr.splice(i, 1)
        }
    }
    // 1.5
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            arr.splice(i--, 1)
        }
    }
    // 2
    for (let i = 0; true;) {
        if (arr[i] === e) {
            arr.splice(i, 1)
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
            odds++
        }
        else {
            even++
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
//var arr = [23,56,4,4,78,5,63,45,210,56,4] 
//console.log(odd_even(arr, 4))

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
//var arr = [23,56,4,4,78,5,63,45,210,56,4] 
//console.log(odd_even(arr, 4))

/*
Write a function called findDup() that returns all the elements that are repeated more than
once in a given array.
Return the result as a Javascript object (the key should be the repeated element, the value
should be the amount of times this element repeated).
If an element appears only once it should not be added to the result object.
*/
function findDup(arr) {
    const result = {}
    for (e of arr) {
        if (result[e] == undefined) {
            result[e] = 1
        }
        else {
            result[e] += 1
        }
    }
    for (e in result) {
        if (result[e] == 1) {
            delete result[e]
        }
    }
    return result
}

let arr = [23, 23, 56, 4, 4, 78, 5, 63, 45, 210, 56, 4]
console.log(findDup(arr))

// another way using sort ...
function findDup_with_sort(arr) {
    const result = {}
    arr.sort()
    let current = arr[0]
    let counter = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == current) {
            counter++;
        }
        else {
            if (counter > 1) {
                result[current] = counter
            }
            current = arr[i]
            counter = 1
        }
    }
    if (counter > 1) {
        result[current] = counter
    }
    return result
}

arr = [23, 23, 56, 4, 4, 78, 5, 63, 45, 210, 56, 4, 4]
console.log(findDup(arr))
console.log(findDup_with_sort(arr))

function arr_bool_9(arr) {
    let index = 0;
    while (true) {
        if (arr[index] == false) {
            return index;
        }
        else {
            index++;
            if (index >= arr.length) {
                return -1;
            }
        }
    }
}
console.log(arr_bool_9([true, true, true, false, true, false]));

/*
Create a function that receives an array.
If all the values of the array are smaller than 50, the function returns “smaller than 50”.
If all the values of the array are between 51 to 100, the function returns “ between 51 to
100”.
If all the values of the array are between 101 to 200, the function returns “between 101 to
200”.
If all the values of the array are greater than 201, the function returns “greater than 200”.
If none of the conditions above is happening your function should print “No condition is
happening” .
*/
function check_in_range(arr) {
    // smaller than 50
    let found_lo_matim = false
    index = 0;
    for (index = 0; index < arr.length; index++) {
        if (arr[index] >= 50) {
            break;
        }
    }
    if (index == arr.length) {
        return 'all smaller than 50!'
    }
    index = 0;
    for (index = 0; index < arr.length; index++) {
        if (arr[index] >= 51 && arr[index] <= 100) {
            break;
        }
    }
    if (index == arr.length) {
        return 'all between 51 and 100'
    }
    // .. two more loops the same

}

/*
Write a function that receives four parameters of type int.
The function has to return the smaller value between all of them.
If one of the parameters is between 1 to 5, then return -1.
*/
function check_minimum(a, b, c, d) {
    const list1 = [a, b, c, d]
    for(let e in list1) {
        if (e >= 1 && e <= 5) {
            return -1
        }
    }
    let min = Math.min(...list1) // found the smallest element
    return min
}
console.log(check_minimum(-3, 7, 9, 10));