function countOfAllBooleans(arr) {
  let counter = 0;
  for(let member of arr)
   {
     if(typeof member == "boolean") counter++;
   }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;