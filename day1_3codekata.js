// 문제 푸는데 2시간 이상 투자했기 때문에 더이상 시간을 쓰면 안될것 같아 포기했습니다..
// 실력을 향상해서 다시 한번 도전!!!

// 첫 번째 시도 : 끼워맞추기 식으로 푼 코드... 이렇게 하면 테스트 케이스 2개 빼고 다 통과.
const getLengthOfStr = str => {
  let arr = []
  if (str.length === 0) {
    return 0;
  }
  for(let i=str.length-1; i >= 0 ; i--) {
    if(!arr.includes(str[i])) {
      arr.push(str[i])
    }
    else {
      str = str.slice(0,i+1)
    }
  }
  return arr.length-str.length+1
}


// model solution
function getLengthOfStr(s) {
    let strArr = [];
    let prevStrArr = [];
    console.log(s)
    for (let i = 0; i < s.length; i++) {
      
      console.log('=======================', i);
      
        let ss = s.slice(i, i+1);
        console.log(' 검사 ss ==> ', ss);
        for (let j = 0; j < strArr.length; j++) {
            if (ss === strArr[j]) {
                
                if (prevStrArr.length < strArr.length) {
                    prevStrArr = strArr.slice();
                    console.log('prevStrArr에 저장', prevStrArr);
                }
                
                strArr = strArr.splice(j+1, strArr.length);
                console.log('자르고 다시 시작 strArr', strArr, j)
                             //splice arr 자르는 함수
                break;
            }
        }
        
        strArr.push(ss);
        console.log('추가한 후 strArr', strArr);
    }
    
    return Math.max(strArr.length, prevStrArr.length);
}

console.log(getLengthOfStr('taaaytts'));