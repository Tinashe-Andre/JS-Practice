function mutation(stringArray){
  let stringOneLower = stringArray[0].toLowerCase();
  let stringTwoLower = stringArray[1].toLowerCase();

  for (const str of stringTwoLower){
    if (stringOneLower.includes(str) == true){
      continue;
    }else {
    return false;
  }
  }
  return true;
}

console.log(mutation(["hello", "Hello"])); //true
console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
console.log(mutation(["Mary", "Army"])); //true
console.log(mutation(["Mary", "Aarmy"])); //true
console.log(mutation(["Alien", "line"])); //true
console.log(mutation(["floor", "for"])); //true
console.log(mutation(["hello", "neo"])); //false
console.log(mutation(["voodoo", "no"])); //false
console.log(mutation(["ate", "date"])); //false
console.log(mutation(["Tiger", "Zebra"])); //false
console.log(mutation(["Noel", "Ole"])); //true