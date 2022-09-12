import Dice from './Dice';

function App() {
    return (
     <div>
        <Dice color='red' num={2}/>
        {/* 자바스크립트 숫자 2를 표현하려면 중괄호 필요  */}
     </div>
    );
}

export default App;