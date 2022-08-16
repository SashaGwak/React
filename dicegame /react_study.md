# React 
* 페이스북에서 만든 프론트엔드 JavaScript 라이브러리

## React Native
* React의 방식으로 네이티브 앱을 개발할 수 있는 페이스북의 오픈 소스 프레임워크 
* 원래 안드로이드랑 iOS앱 개발을 한번에 할 수 있도록 함 

## 프로젝트 생성 및 실행 
```bash
npm init react-app . 
# 현재 디렉토리에서 새로운 리액트 프로젝트 만든다는 의미
# npm init react-app <폴더 이름>
# 혹은 vscode로 폴더 열고 터미널에서  npm init react-app . 
# 폴더에는 아무것도 없어야 함 ! 

# 개발 모드 실행
npm run start
```

## JSX, Fragment
```html
<!-- index.html -->
<!-- 웹 브라우저에서 가장 먼저 실행되는 파일 -->
```
```js
// index.js
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
(예약어와 같은 속성명은 사용할 수 없기 때문)
3. 이벤트 핸들러들은 Camel Case로 작성필요
ex) onblur -> onBlur, onfocus -> onFocus, onmounsedown -> onMouseDown
4. JSX 요소들은 반드시 하나의 태그로 감싸줘야 함
*/

// Fragement 활용
import { Fragment } from 'react';

root.render(
  <Fragment>
    <p>안녕</p>
    <p>리액트!</p>
  </Fragment>
);
// 굳이 불필요한 div를 써주지 않고 하나의 태그로 내용을 묶어줌 
// Fragment 써주지 않는 밑의 코드와 동일 더 간단하게 빈태그로 만들어주기~~! 

root.render(
  <>
    <p>안녕</p>
    <p>리액트!</p>
  </>
);
```

## JSX javascript 야무지게 활용하기
```js
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
```