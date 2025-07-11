function numbers() {
    return [1, 2, 3, 4, 5];
}

function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}           

function average(arr) {
    return sum(arr) / arr.length;
}