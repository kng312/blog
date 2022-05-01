/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //Destructuring 문법
  //let [a, c] = [1, 2];    // a = 1, c = 2

  //let post = '강남 우동 맛집';
  // state 
  // 차이점 : state 사용하는 html은 자동 재렌더링
  // 자주변경이 안되는 곳은 그냥 변수로 쓰기
  /* 
    [1, 2, 3].map(function (a) {
     return '12321312323'
    })
    map 함수
    1. 배열 만큼 실행
    2. return 사용시 배열에 담음
    3. 유용한 파라미터 
  */

  //state 변경 함수 사용

  let [title, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, c] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title2, b2] = useState(0);
  let [intp, setIntp] = useState(' ');


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

      {/* <div className='list'>
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
        <h4 onClick={() => { setModal(modal == false) }}>{title[2]}</h4>
        {
          modal == true ? <Modal /> : null
        }
        <p>4월 26일 발행</p>
      </div> */}

      {
        title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(modal == false); b2(i) }}>{title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let plus = [...like]
                  plus[i] = plus[i] + 1
                  c(plus)
                }}>👍</span> {like[i]}
              </h4>
              <p>4월 26일 발행</p>
              <button onClick={() => {
                let copy4 = [...title];
                copy4.splice(i, 1)
                b(copy4)
              }}>삭제</button>
            </div>)
        })
      }

      <input onChange={(e) => { setIntp(e.target.value); }} />
      <button onClick={() => {
        let copy3 = [...title];
        copy3.unshift(intp);
        b(copy3);
      }} >추가</button>

      {
        modal == true ? <Modal title2={title2} b={b} title={title} /> : null
      }

      {/* <Modal/> 로 사용가능 */}
      {/* {
        modal == true ? setModal(false) : setModal(true)
      } 
      {
        [1, 2, 3].map(function () {
          return <div> 안녕 </div>
        })
      }*/}

    </div>
  );
}

/* 컴포넌트 대문자로 시작
  1. 반복적인 html을 축약
  2. 큰페이지들 페이지 전환
  3. 자주 변경되는 html UI

  문제점 : state 를 가져다 쓸 때 
*/
/*props 부모 > 자식 state 를 사용할때
 부모 -> 자식 만 가능
 컴포넌트 끼리는 불가능
*/

function Modal(props) {
  return (
    //<div> 없이 사용 가능 <> </>
    <div className='modal'>
      <h4>{props.title[props.title2]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[0] = '여자 코트 추천';
        props.b(copy)
      }}>글 수정</button>
    </div>
  )
}

export default App;
