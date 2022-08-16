// 리액트에서 이미지 파일 사용하는 방법
import diceBlue01 from './assets/dice-blue-1.svg';
// Import문으로 이미지 파일 이름을 정해서 해당 경로에 있는 파일 불러와줘야함

function Dice() {
    return <img src={diceBlue01} alt='주사위' />; 
}

export default Dice