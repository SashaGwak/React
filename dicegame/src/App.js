import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

function App() { 
    const [num, setNum] = useState(1);
    // 배열의 형태로 요소 두개 리턴 = useState(초기값)
    // 첫번째 요소는 state 값 -> 현재 변수의 값(첨엔 당연 초기값)
    // 두번째 요소는 setter 값 -> 이 함수를 호출할 때 파라미터로 전달하는 값
    // setter 변수명은 상관없지만 보통 set + state명 이런식으로 많이감 

    const handleRollClick = () => {
        const nextNum = randomDiceNumber();
        setNum(nextNum);
    };

    const handleClearClick = () => {
        setNum(1);
    };

    return (
     <div>
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Dice color='red' num={num}/>
     </div>
    );
}

export default App;