function countOfAllNumbersSmallerThanTarget(nums, target) {
  let counter = 0;
  for(let num of nums)
  {
    if(target>num)counter++
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;