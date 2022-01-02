function setUnionOfAnyAmountOfSets(...args) {
  let res = new Set();
  for(let ele of args)
  {
    for(let num of ele)
    {
      res.add(num)
    }
  }
  return res;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;