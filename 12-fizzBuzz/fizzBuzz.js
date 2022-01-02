function fizzBuzz(start, end) {
  let res = []
  while(start<=end)
  {
    if(start%3==0 && start%5==0)
    {res.push("FizzBuzz");
    start++;
    continue;}
    
    if(start%3==0)
    {res.push("Fizz");
    start++;
    continue;}

    if(start%5==0)
    {res.push("Buzz");
    start++;
    continue;}

    res.push(start);
    start++;
  }
  return res;
}

// Do not edit this line;
module.exports = fizzBuzz;