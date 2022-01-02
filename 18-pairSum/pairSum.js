function pairSum(nums, target) {
  if(nums.length < 2)throw 'The nums array is too small!'
  let mp = new Map();
  for(let i = 0;i<nums.length;i++)
    {mp.set(nums[i],i)}
  for(let i = 0;i<nums.length;i++)
    {if(mp.has(target-nums[i]) && mp.get(target-nums[i])!=i)return true;}
  return false;
}

// Do not edit this line;
module.exports = pairSum;