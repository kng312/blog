/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //Destructuring 문법
  //let [a, c] = [1, 2];    // a = 1, c = 2

  let post = '강남 우동 맛집';
  // state 
  // 차이점 : state 사용하는 html은 자동 재렌더링
  // 자주변경이 안되는 곳은 그냥 변수로 쓰기
  let [title, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, c] = useState(0);
  let [modal, setModal] = useState(false);

  //state 변경 함수 사용

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy2 = [...title];
        copy2.sort();
        b(copy2)
      }}>정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}>change</button>

      <div className='list'>
        <h4>
          {title[0]}
          <span onClick={() => { c(like + 1) }}>👍</span> {like} <br></br>
        </h4>
        <p>4월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>4월 26일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        {
          modal == true ? <Modal /> : null
        }
        <p>4월 26일 발행</p>
      </div>

      {/* <Modal/> 로 사용가능 */}
      {/* {
        modal == true ? setModal(false) : setModal(true)
      } */}

    </div>
  );
}

/* 컴포넌트 대문자로 시작
  1. 반복적인 html을 축약
  2. 큰페이지들 페이지 전환
  3. 자주 변경되는 html UI

  문제점 : state 를 가져다 쓸 때 
*/
function Modal() {
  return (
    //<div> 없이 사용 가능
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )

}

export default App;
