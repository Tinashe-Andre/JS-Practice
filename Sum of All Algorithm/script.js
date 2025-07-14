function sumOfAllNumbers(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function averageOfNumbers(arr) {
    if (arr.length === 0) return 0;
    return sumOfAllNumbers(arr) / arr.length;
}

function maxOfNumbers(arr) {
    return arr.length === 0 ? null : Math.max(...arr);
}

function minOfNumbers(arr) {
    return arr.length === 0 ? null : Math.min(...arr);
}

function countOfNumbers(arr) {
    return arr.length;
}