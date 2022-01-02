class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, left, right) {
    let l = left===undefined? 0: left;
    let r = right===undefined? nums.length-1:right;
    if(l<=r)
    {
      let mid = Math.floor(l/2 + r/2);
      if(nums[mid] == target)return true;
      if(target > nums[mid])return this.binarySearch(nums,target,mid+1,r)
      else{return this.binarySearch(nums,target,l,mid-1)}
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;