class MySolution {
  countDownSum(num) {
    if(num < 2)return num;
    let res = 0;
    res = num + this.countDownSum(num-1);
    return res;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;