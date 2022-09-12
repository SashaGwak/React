# State

## 사용방법 
```js
// 1.일단 불러와주기 
import { useState } from 'react';

// ...
function App() {
  const [num, setNum] = useState(1);
// 배열의 형태로 요소 두개 리턴 = useState(초기값)
// 첫번째 요소는 state 값 -> 현재 변수의 값(첨엔 당연 초기값)
// 두번째 요소는 setter 값 -> 이 함수를 호출할 때 파라미터로 전달하는 값
// setter 변수명은 상관없지만 보통 set + state명 이런식으로 많이감


// 아래 코드처럼 setter 함수를 활용해서 이벤트 핸들러를 등록해두면, 이벤트가 발생할 때마다 상태가 변하면서 화면이 새로 그려지는 것!
  const handleRollClick = () => {
    setNum(3); // num state를 3으로 변경!
  };

  const handleClearClick = () => {
    setNum(1); // num state를 1로 변경!
  };

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="red" num={num} />
    </div>
  );
```

