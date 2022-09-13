import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

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

export default App;