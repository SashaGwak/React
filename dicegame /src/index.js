// index.html 파일이 열리고 나서 실행되는 파일로 
// 리액트 코드들 중에서 가장 먼저 실행되는 파일 
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1 className='hi'>안녕 리액트!</h1>);
// root에다가 render
/*
리액트에서는 render메소드로 html태그를 만들어줌(JSX 문법)
JavaScript 확장한 문법이기 때문에 모든 문법을 쓸 수 있는 건 아니다! 
1. class 속성을 작성하려면 -> className 으로 작성해야함
2. for 도 사용불가 -> htmlFor 으로 작성필요
3. 이벤트 핸들러들은 Camel Case로 작성필요
  ex) onblur -> onBlur, onfocus -> onFocus, onmounsedown -> onMouseDown
*/