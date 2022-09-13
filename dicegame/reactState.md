# State

## 기본형 state 사용방법 
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

## 참조형 state 사용시 주의점 
```js 
function App() { 
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    
    const handleRollClick = () => {
        const nextNum = randomDiceNumber();
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        // 해결법 !! spread 문법 
        // 빈 배열안에서 gameHisory state를 펼쳐주고 그 다음 새로 추가할 요소를 붙여줘 계속 새로운 배열을 만드는 것 !

        /*
        gameHistory.push(nextNum); 
        setGameHistory(gameHistory);  
        */
        // 문제점 
        // 얘는 기록들을 가진 배열 자체룰 값으로 갖는게 아니라 그 배열을 가리키고 있는 주솟값을 가지고 있음, 따라서 push를 사용하여 배열을 추가하여 값이 변경되어도 이전 내용은 주소 값이 같기 때문에 변화가 있더라도 없다고 인식함 

        // 결론 ***
        // 배열이나 객체 같은 참조형 State를 사용할 때는 메소드나 할당 연산자로 값을 바꾸는 게 아니라 반드시 새로운 값을 만들어서 변경해야한다! 
    };
    
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    };

    return (
    <div>
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <h2>나</h2>
            <Dice color='red' num={num}/>
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    </div>
    );
}
```