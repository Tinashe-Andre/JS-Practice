function frankenSplice(firstArray, secondArray, index){
  const copyOne = firstArray.slice();
  const copyTwo = secondArray.slice();
  copyTwo.splice(index, 0, ...copyOne);
  return copyTwo;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));