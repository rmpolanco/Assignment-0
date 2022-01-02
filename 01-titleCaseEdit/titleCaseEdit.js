function titleCaseEdit(title) {
  let arr = title.split(" ");
  for(let i = 0; i < arr.length;i++)
  {
    temp = arr[i].split('')
    temp[0] = temp[0].toUpperCase()
    arr[i]=temp.join('')
  }
 return arr.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;