function sumOfNumsWithinARange(nums, start, end) {
  let counter=0;
  let inRange = false;
  for(let i = 0;i<nums.length;i++)
  {
    if(nums[i]==start)
      {
        counter++;
        inRange = true;
        continue;
      }
      if(nums[i]==end)
      {
        counter++;
        break;
      }
    if(inRange)counter++;
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;