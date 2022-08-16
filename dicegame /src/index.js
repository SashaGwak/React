// index.html 파일이 열리고 나서 실행되는 파일로 
// 리액트 코드들 중에서 가장 먼저 실행되는 파일 
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const product = 'macbook'; 
const imageUrl = 'https://itimg.chosun.com/sitedata/image/202110/19/2021101900339_0.jpg'; 

function handleClick() {
  alert('곧 도착합니다!');
}

root.render(
  <>
    <h1>나만의 { product.toUpperCase() } 주문하기</h1>
    {/* product.toUpperCase() 처럼 메소드 사용가능 */}
    <img src={ imageUrl } alt='제품사진' />
    {/* 이미지 주소 등도 따옴표 안쓰고 중괄호로만!!  */}
    <button onClick={ handleClick }>확인</button>
    {/* function 실행도 중괄호 사용!! */}
  </>
);
// 중괄호 내에서는 Javascript 문법을 모두 사용가능 하다~~! 
/* 주의사항 
- 중괄호 안에는 자바스크립트 표현식만 사용할 수 있다 
-> 죽 if, for문 등 함수 선언과 같은 문장은 사용 불가
*/

