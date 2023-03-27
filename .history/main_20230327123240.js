const number = 123


console.log(number + 1);


// 데이터 타입 확인
function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1)  
  // slide(첫번쨰수 , 두번쨰 ) 문자의 앞에서 첫번째자리 수만큼 까지에서 , 마지막 에서 두번째자리수만큼만 잘라내서 표현하겠다
}

console.log(checkType('Hello'))



const user = {
  name: 'Heropy',
  age: 85,
  isValid: true, 
  email : 'theasdf@adsf'
}

for (const key in user) {
  console.log(user[key]);
}