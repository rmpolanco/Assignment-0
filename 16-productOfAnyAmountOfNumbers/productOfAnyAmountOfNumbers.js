function productOfAnyAmountOfNumbers(...args) {
  let res = 1;
  for(let num of args)
  {
    res*=num;
  }
  return res;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;