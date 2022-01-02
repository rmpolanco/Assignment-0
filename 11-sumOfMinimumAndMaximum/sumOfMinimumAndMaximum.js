function sumOfMinimumAndMaximum(nums) {
  //O[1] solution *assuming at least 1 number in the array*

  return nums[0]+nums[nums.length-1];
  
  /*O[n] solution
  let min = nums[0];
  let max = nums[0];
  for(let num of nums)
  {
    if(num>max)max=num;
    if(num<min)min=num;
  }
  return max+min;
  */
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;