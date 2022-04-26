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
  //state 변경 함수 사용

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>
          {title[0]}
          <span onClick={() => { c(like + 1) }}>👍</span> {like} <br></br>
          <span onClick={() => { b(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) }}>change</span>
        </h4>
        <p>4월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>4월 26일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>4월 26일 발행</p>
      </div>
    </div>
  );
}

export default App;
