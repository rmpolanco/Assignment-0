function frequencyCounter(word) {
  var res = new Object()
  let arr = word.split('')
  for(let letter of arr)
      {
        if(!res[letter])res[letter] = 1
        else{res[letter]++}
      }
  return res;
}

// Do not edit this line;
module.exports = frequencyCounter;