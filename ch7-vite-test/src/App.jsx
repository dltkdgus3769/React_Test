import React, { Component } from 'react';
import LifeCycleSample from './component/LifeCycleSample';
import ErrorBoundary from './component/ErrorBoundary';
import LifeCycleSampleEx from './component/LifeCycleSampleEx';
import './App.css';
// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        <h1 className='react'>ch6 컴포넌트 반복</h1>
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          {/* 예외 설정 컴포넌트 감싸서 적용. */}
          {/* <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary> */}
          <ErrorBoundary>
            <LifeCycleSampleEx color={this.state.color} />
          </ErrorBoundary>
        </div>
      </>
    );
  }
}

export default App;