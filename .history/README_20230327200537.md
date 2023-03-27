# 프로젝트 실행

```
npm run dev 

(parcel사용)
```

## 목적
```
자바스크립트 공부 중 테스트 목적, 잘 까먹거나 연습하면서 복기가 필요할경우 남김
```

# 데이터 타입 확인

``` html

function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('Hello'))

````


# this 차이

```
일반 함수의      this는   호출 위치에서 정의
화살펴 함수의    this는   자신이 선언된 함수(렉시컬) 범위에서 정의
```