function countOfAllBooleansAndStrings(arr) {
  let counter = 0;
  for(let member of arr)
   {
     if(typeof member == "boolean" || typeof member == "string") counter++;
   }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;