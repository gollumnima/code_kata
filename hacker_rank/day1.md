### mean, median, mode 구하기
N = 6;
X = [1,2,3,4,5,5,]

mean is 20/6
median is 3+4/2
mode = 5 (occurs most frequently)

- 어려웠던 점
  - input값은 한 개 인데 예시가 두 줄로 제공 -> 콘솔 찍어서 \n으로 구분하면 된다는 것을 파악
  - 중복값 처리 -> 객체의 속성을 이용하면 되는데 헷갈림

- 나의 풀이

```js
const processData = (input) => {
  let mean, median, mode;
  let splitted = input.split('\n')
  let arr = splitted[1].split(' ');
  const midNum = (arr.length / 2) - 1;
  let convertedToNumber = arr.map(el => +el);
  let orderedList = convertedToNumber.sort((a,b) => a-b);
  let obj = {};
  orderedList.forEach(num => {
    obj[num] = (obj[num] || 0) + 1;
  })
  
  const flag = Object.values(obj).indexOf(Math.max( ...Object.values(obj)))
  
  mode = orderedList[flag];
  
  mean = (convertedToNumber.reduce((acc, curr) => acc + curr, 0))/arr.length;
    median = (orderedList[midNum] + orderedList[midNum + 1]) / 2;    
  
  console.log(mean)
  console.log(median)
  console.log(mode) 
} 

processData('10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060')

```

--

### X,W 배열간의 요소를 이용한 합산값 구하기
X = [1,2,3]
W = [5,6,7]
X[i]*W[i] = [5, 12, 21]. their sum is 38. sum of W = 18. print 38/18 -> 2.111 => return 2.1


- 어려웠던 점
  - 어려움 없이 풀었음. 

- 나의 풀이

```js
let inputString = '';
let currentLine = 0;

const readLine = () => {
  return inputString[currentLine++];
}

const weightedMean = (X, W) => {
  const mixtureOfXW = X.map((x, i) => {
    return x * W[i]
  })
  const sumOfEach = mixtureOfXW.reduce((acc, curr) => acc + curr, 0);
  const sumOfW = W.reduce((acc, curr) => acc + curr, 0);  
  console.log((sumOfEach / sumOfW).toFixed(1));
}


weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5])
```

--

### 

n = the number of people
m = the number of ticket windows
k = the number of destinations

- 어려웠던 점
  - 문제 파악이 어려웠음

- 나의 풀이

```js

```