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
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06], 
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
}; 

function Dice({color = 'blue', num = 1}) {
    // color 기본값 blue, num 기본값 1로 지정해줌 
    const src = DICE_IMAGE[color][num - 1]; 
    const alt = `${color} ${num}`; 
    return <img src={src} alt={alt} />; 
}

// function Dice(props) {
//     console.log(props);
//     // {color: 'blue'...} color프로퍼티 있는 객체형태로 넘어옴
//     const diceImg = props.color === 'red'? diceRed01 : diceBlue01;
//     // color가 red면 레드 이미지, 아니면 블루 이미지 뜨도록 
//     return <img src={diceImg} alt='주사위' />; 
// }

export default Dice;