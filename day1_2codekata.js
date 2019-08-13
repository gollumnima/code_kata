// 첫 시도 for문 두 번 돌리기 : 처음에는 순+일때, 플러스인데 0붙을때, 순-일때, 마이너스인데 0붙을 때 네 가지로 생각했는데.. 
//생각해보니 Number()로 묶어주면 string 안의 0이 다 사라진다는 것을 깨달았다!

const reverse = x => {
  let arr = []
  let newX =x.toString().split('')
  if(newX[0] !=='-' && newX[newX.length-1] !== 0) {
    for(let i=newX.length-1; i >= 0 ; i--) {
      arr.push(newX[i])
    }
    arr = Number(arr.join(''));
  }
  else if (newX[0] === '-') {
    for(let i=newX.length-1; i > 0; i--) {
      arr.push(newX[i])
    }
    arr = '-' + Number(arr.join(''))
  }
  return +arr;
}

//재귀 이용해서 for문 안 돌리고 풀어보기. 다 풀고 식을 날려먹어서 아쉬웠지만 기억을 더듬어서 다시 풀었다!
const reverse = x => {
    let answer = '';
    let minus = '';
    if(x === '') {
      return ''
    }
    else {
      answer = reverse(String(x).substring(1))+String(x).charAt(0)
      minus = answer.toString().split('')
      }
      if(minus[minus.length-1]==='-') {
        return +('-'+ +minus.slice(0,minus.length-1).join(''))
      }
    return +answer;
  }


  //창석님 방법쓰 -> 내 첫번째 방법이랑 비슷하긴 한데 unshift를 이용하셨다!
  const reverse = x => {
    let stringNum = x.toString();
    var stringArr = stringNum.toString();
    ["-", "1", "2", "3", "4"];
    var arr = [];
  
    if (stringArr[0] === "-") {
      for (var i = stringArr.length - 1; i > 0; i--) {
        arr.push(stringArr[i]);
      }
      arr.unshift("-");
    } else {
      for (var j = stringArr.length - 1; j >= 0; j--) {
        arr.push(stringArr[j]);
      }
    }
    return +arr.join("");
  };

  //model solution => 마이너스인 부분만 음수를 곱해주면 되는데 이 방법을 왜 생각을 못했을까!! 깔끔쓰~~
  function reverse(x) {
    let minus = false;
    
    if (x < 0) {
        x *= -1;
        minus = true;
    }
    
    let numText = x.toString();
    let result = '';
    
    for (let i = numText.length-1; i >= 0; i--) {
        result += numText[i];
    }
    
    result = minus ? result * -1 : Number(result);
    
    return result;
  }


  // 문제// reverse 함수에 정수인 숫자를 인자로 받습니다.
// 그 숫자를 뒤집어서 return해주세요.

// x: 숫자
// return: 뒤집어진 숫자를 반환!


// 예들 들어,
// x: 1234
// return: 4321

// x: -1234
// return: -4321

// x: 1230
// return: 321