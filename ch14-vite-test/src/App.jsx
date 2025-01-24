import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './App.css'
import NewsList from './components/NewsList';
import Categories from './components/Categories';

import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  // const onClick = () => {
  //   axios
  //     .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  //   try {
  //     //교체
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <h1 className='react'>ch14 API 이용 뷰어 만들기</h1>
      {/* <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div> */}
      {/* 추가 */}
      {/* <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} /> */}

      {/* 추가 */}
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default App;