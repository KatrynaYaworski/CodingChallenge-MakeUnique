/* Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

const makeUnique2 = (string) => {
    const solutionobj = {}; //use the object as a dictionary in order to avoid a nested loop.
    let solution = ''; // use the string as data storage since the object isnt guaranteed to store in the same order.

    for (let i = 0; i < string.length; i++) {
        if (solutionobj[string[i]] === undefined) {
            solutionobj[string[i]] = string[i]
            solution += string[i]
        }
    }
    return solution
}

console.log(makeUnique2('helloworld'))//helowrd
console.log(makeUnique2('iwanttoclimbamountain')) // iwantoclmu


// const makeUnique = (string)=>{
//     const solution = new Set();
// for(let i = 0; i< string.length; i++){
//     solution.add(string[i])
// }
// return solution
// }

// console.log(makeUnique('iwanttoclimbamountainnnz'))
