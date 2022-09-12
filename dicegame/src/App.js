import Button from './Button';
import Dice from './Dice';

function App() {
    return (
     <div>
        <div>
            <Button>던지기</Button>
            <Button>처음부터</Button>
        </div>
        <Dice color='red' num={2}/>
     </div>
    );
}
// 위 버튼처럼 단순히 바로 보여주기만 할 값을 다룰 때는(컴포넌트 함수에서 따로 가공하지 않을  경우에는) 새로운 어떤 prop을 만드는 것 보다 children prop을 활용하는 것이 좋음 
// 다른 컴포넌트나 다른 HTML 태그도 작성가능 

export default App;