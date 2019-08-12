// 내 방법
const twoSum = (nums, target) => {
  let arr = []
  for(let i=0; i < nums.length; i++) { // 앗 나의 실수.. nums의 길이보다 하나 작아야 하는데
    for(let j=0; j <nums.length; j++) { // 여기도!
      if(nums[i]+nums[j] === target && i < j ) { // 처음에 대소비교 조건을 넣지 않았더니 결과값이 [0,1]이 아닌 [0,1,1,0]이 나왔다.
        arr.push(i,j)
      }
    }
  }
  return arr;
}

// 창석님 방법
const twoSum = (nums, target) => {
  let arr = []
  for(let i=0; i < nums.length; i++) {
    for(let j=0; j <nums.length; j++) {
      if(nums[i]+nums[j] === target) {
        arr.push(i,j)
      }
    }
    break; // break를 걸어서 for문이 다 돌지 않고 한쪽에서 먼저 끝나게 해서 중복값이 나오지 않도록 했다.
  }
  return arr;
}


// model solution
function twoSum(nums, target) {
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i+1; j < nums.length; j++) { // j와 i가 겹치지 않게 크기에 차이를 하나 줬다. 깔끔~
       if (nums[i] + nums[j] === target) {
         return [i, j]; // 나는 arr를 생성해서 그 안에 push를 했는데, 모델 솔루션에서는 직접 대입! 굿굿
       }
    }
  }
}