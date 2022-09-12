# Props 
* 개발자 도구내 component 탭에서 볼 수 있음(htmlX)
* props는 properies의 줄임말, props는 전체 속성이니까 각각 속성을 prop라고 부릅니다

## 사용예시 
* color 속성에 따라 주사위 색깔 바꿔주기 
### App.js 
```js 
import Dice from './Dice';

function App() {
    return (
     <div>
        <Dice color='red'/>
        {/* 개발자 도구내 component 탭에서 볼 수 있음  
        이렇게 컴포넌트에 지정한 속성을 Props라고 부름*/}
     </div>
    );
}
export default App;
```

### Dice.js
```js
import diceBlue01 from './assets/dice-blue-1.svg';
import diceRed01 from './assets/dice-red-1.svg';

function Dice(props) {
    console.log(props);
    // {color: 'blue'...} color프로퍼티 있는 객체형태로 넘어옴
    const diceImg = props.color === 'red'? diceRed01 : diceBlue01;
    // color가 red면 레드 이미지, 아니면 블루 이미지 뜨도록 해준 것 
    return <img src={diceImg} alt='주사위' />; 
}

export default Dice;
```


## 실습 
* color 속성에 따라 주사위 색깔 및 숫자 바꿔주기 
### App.js 
```js 
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
```

### Dice.js
```js
// 리액트에서 이미지 파일 사용하는 방법
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
// Import문으로 이미지 파일 이름을 정해서 해당 경로에 있는 파일 불러와줘야함
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const DICE_IMAGE = {
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04. diceBlue04, diceBlue05, diceBlue06], 
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
}; 

// props 속성을 color, num 나눠서 받았음(props계속 반복해서 써 주기 싫어서)
function Dice({color = 'blue', num = 1}) {
    // color 기본값 blue, num 기본값 1로 지정해줌 
    const src = DICE_IMAGE[color][num - 1]; 
    const alt = `${color} ${num}`; 
    return <img src={src} alt={alt} />; 
}

export default Dice;
```