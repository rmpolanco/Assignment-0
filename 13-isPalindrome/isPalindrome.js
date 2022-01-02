function isPalindrome(word) {
  
  return word == word.split('').reverse().join('')

  /* Stack method
  let res = [];
  let arr = word.split('');
  let mid = Math.floor(arr.length/2)
  for(let i = 0;i<arr.length;i++)
  {
    if(i == mid && arr.length%2==1)continue;
    if(i < mid) res.push(arr[i])
    else if(arr[i]==res[res.length-1]) res.pop()
  }
  return res.length == 0;
  */
}

// Do not edit this line;
module.exports = isPalindrome;