// const number = 123


// console.log(number + 1);


// // 데이터 타입 확인
// function checkType(data){
//   return Object.prototype.toString.call(data).slice(8, -1)  
//   // slide(첫번쨰수 , 두번쨰 ) 문자의 앞에서 첫번째자리 수만큼 까지에서 , 마지막 에서 두번째자리수만큼만 잘라내서 표현하겠다
// }

// console.log(checkType('Hello'))



const user = {
  name: 'Heropy',
  age: 85,
  isValid: true, 
  email : 'theasdf@adsf'
}

// for (const key in user) {
//   console.log(key); // 키 네임만 반환 >> 문자니까
//   // console.log(user[key]); // 키 벨류 값만 반환 [문자] 대괄호표기법으로 넣음 , 그럼 각각 key 네임들이 들어갈것임, 객체 반복 in 이니까
// }

function getName({ age }) {
  // const { age, name } = users
  // console.log(age, name)
  return age;
}
console.log(getName(user))

// const n = ''
// const num2 = n || 7
// console.log(num2);


// falsy Data
// false
// 0
// nul
// lundefined
// NaN
// ''
// 0n BigInt 자바스크립트 데이터  종류


