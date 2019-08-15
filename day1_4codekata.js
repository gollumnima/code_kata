// 첫 시도. for문을 쓰지 않으려고 reverse() 함수를 이용했지만 너무 꼼수 같아서 다시..!
const sameReverse = num => {
  origin = num.toString().split('')
  num = num.toString().split('').reverse()
  if(num.length === 1) {
    return true;
  }
  for(let i=0; i < num.length-1; i++) {
    if (origin.join() !== num.join()) {
      return false;
    }
    return true;
  }
}

// 두번째 시도. 음수일 경우 전부 false, 양수일 경우 숫자의 첫번째 부터 끝번째숫자를 서로 비교해 나가는 방식
const sameReverse = num => {
  let numNew = [...num+'']
  for(let i=0; i< numNew.length; i++) {
    if(num >= 0) {
      return numNew[i] === numNew[numNew.length-i-1] // ? true : false 이 부분을 삼항연산자로 썼다가 굳이 필요 없어서 지웠다! 와우!
     }
   }
  return false;
}
  
// 창석님 코드


// Model solution. for문도 reverse도 쓰지 않고 push와 pop으로만 문제를 풀었다. 와우..!

    function sameReverse(num) {
        let xStrArr = (num + '').split('');
        let strLength = xStrArr.length;
        let arr = [];
        
        for (let i = 0; i < strLength; i++) {
            arr.push(xStrArr.pop());
        } 
        console.log(Number(arr.join('')))
        return num === Number(arr.join(''));
    }
    
// 문제

// 숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

// num: 숫자
// return: true or false (뒤집은 모양이 num와 똑같은지 여부)


// 예를 들어,
// num = 123
// return false 
// => 뒤집은 모양이 321 이기 때문

// num = 1221
// return true 
// => 뒤집은 모양이 1221 이기 때문

// num = -121
// return false 
// => 뒤집은 모양이 121- 이기 때문

// num = 10
// return false 
// => 뒤집은 모양이 01 이기 때문