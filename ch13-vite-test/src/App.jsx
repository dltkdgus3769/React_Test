
import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Details from './pages/Details';

const App = () => {
  return (
    <>
      <h1 className='react'>ch13 라우팅</h1>
      <Routes>
        {/*추가 Layout을 적용하는 그룹 */}
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>

        {/* Articles 관련 라우트 */}
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>

        {/* Articles 관련 라우트 */}
        <Route path="/category" element={<Categories />}>
          <Route path=":name" element={<Category />}>
            <Route index element={<Details />} />
          </Route>
        </Route>

        {/* Articles 관련 라우트 */}
        <Route path="/category/:name" element={<Category />}>

        </Route>

        {/* 추가 Not Found 페이지 */}
        <Route path="*" element={<NotFound />} />

        <Route path="login" element={<Login />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default App;