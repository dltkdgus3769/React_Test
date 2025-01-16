import React, { Component } from 'react';
import './App.css'
import RefSample from './component/RefSample'
import ScrollBox from './component/ScrollBox'
import ValidationSample from './component/ValidationSample'
import ScrollBoxEX from './component/ScrollBoxEX';

// function App() {
class App extends Component {
  render() {
    return (
      <>
        <h1 className='react'>ch5 ref, DOM 요소에 이름달기.</h1>
        {/* <ValidationSample /> */}
        {/* <RefSample /> */}
        {/* 부모에서 자식 컴포넌트 방향으로 props 전달 */}
        {/* <ScrollBox ref={(ref) => this.scrollBox = ref} /> */}
        {/* 부모에서 자식 컴포넌의 ref에 접근하여, 자식 컴포넌트 안에 메서드 호출 */}
        {/* <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨위로</button>
        <button onClick={() => this.scrollBox.scrollToMiddle()}>중간으로</button> */}
        <ScrollBoxEX ref={(ref) => this.ScrollBoxEX = ref} />
        {/* 부모에서 자식 컴포넌의 ref에 접근하여, 자식 컴포넌트 안에 메서드 호출 */}
        <button onClick={() => this.ScrollBoxEX.scrollToBottom()}>맨밑으로</button>
        <button onClick={() => this.ScrollBoxEX.scrollToTop()}>맨위로</button>
        <button onClick={() => this.ScrollBoxEX.scrollToMiddle()}>중간으로</button>
      </>
    )
  }
}

export default App
