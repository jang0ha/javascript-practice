const number = 123

console.log(number + 1);

function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('Hello'))
