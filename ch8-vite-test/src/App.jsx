import React, { useState } from 'react';
import Info from './component/Info'; // 파일 경로 수정
import CounterUsereducer from './component/CounterUsereducer';
import InfoUseRecuder from './component/InfoUseReducer';
import Average from './component/Average';
import './App.css'
import AverageUseCallback from './component/AverageUseCallback';
import AverageUseRef from './component/AverageUseRef';
import InfoUseCostomHooks from './component/InfoUseCostomHooks';
import AverageEx from './component/AverageEx';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <h1 className='react'>ch8 hooks 함수형 컴포넌트 추가 기능 확인</h1>
        {/* <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
        */}
      </div>
      {/* <h2>useReducer 버전 Counter</h2>
      <CounterUsereducer />
      <InfoUserReducer /> */}
      {/* <Average />
      <h2>useCallback 사용 Average</h2>
      <AverageUseCallback /> */}
      {/* <AverageUseRef /> */}
      {/* <InfoUseCostomHooks /> */}
      <AverageEx />
    </>
  );
};

export default App;
