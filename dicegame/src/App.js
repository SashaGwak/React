import Board from './Board';
import Button from './Button';
import {useState} from 'react';

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

function App() {
    // const [num, setNum] = useState(1);
    // const [sum, setSum] = useState(0);
    const [myHistory, setGameHistory] = useState([]);
    // const [othernum, setOtherNum] = useState(1);
    // const [othersum, setOtherSum] = useState(0);
    const [otherHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = randomDiceNumber();
        const nextOtherNum = randomDiceNumber();
        setGameHistory([...myHistory, nextMyNum]);
        setOtherGameHistory([...otherHistory, nextOtherNum]);
        // setNum(nextMyNum);
        // setSum(sum + nextMyNum);
        // setNum(nextOtherNum);
        // setSum(othersum + nextOtherNum);
    };
    
    const handleClearClick = () => {
        setGameHistory([]);
        setOtherGameHistory([]);
        // setNum(1);
        // setSum(0);
        // setOtherNum(1);
        // setOtherSum(0);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name='나' color='blue' gameHistory={myHistory} />
                <Board name='상대' color='red' gameHistory={otherHistory} />
            </div>
        </div>
    );
}

export default App;