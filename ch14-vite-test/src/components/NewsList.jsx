//추가
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
//추가
import axios from 'axios';
//추가
import usePromise from '../lib/usePromise';
import PdItem from './PdItem';
import FoodBusanItem from './foodBusanItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
    //방법1
    // //추가
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);
    // //추가
    // useEffect(() => {
    //     // async를 사용하는 함수 선언
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             //추가
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             //추가       
    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    //             );
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, [category]);

    // //추가
    // // 대기 중일 때
    // if (loading) {
    //     return <NewsListBlock>대기 중...</NewsListBlock>;
    // }

    // //추가
    // // 아직 articles 값이 설정되지 않았을 때
    // if (!articles) {
    //     return null;
    // }

    // // articles 값이 유효할 때
    // return (
    //     <NewsListBlock>
    //         {/* //추가 */}
    //         {articles.map((article) => (
    //             <NewsItem key={article.url} article={article} />
    //         ))}
    //     </NewsListBlock>
    // );


    //추가
    //방법2
    const [loading, resolved, error] = usePromise(() => {
        if (category === 'cctvWeather') {
            return axios.get(
                `http://apis.data.go.kr/1360000/RoadWthrInfoService/getCctvStnRoadWthr
?serviceKey=D4bhdgOHfc5NaJLWpQJd7j9WpYbR4UTgFtZ7bz%2FLbRodROFNgm0lXnMxjE%2BE0s3HPKY7lAoCQ3yTUpUS2VMXlg%3D%3D&numOfRows=10&pageNo=1
&eqmtId=0500C00001&hhCode=00&dataType=JSON`
            );
        } else if (category === 'foodBusan') {
            return axios.get(
                `http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=D4bhdgOHfc5NaJLWpQJd7j9WpYbR4UTgFtZ7bz%2FLbRodROFNgm0lXnMxjE%2BE0s3HPKY7lAoCQ3yTUpUS2VMXlg%3D%3D&numOfRows=10&pageNo=1&resultType=json`
            );
        } else {
            const query = category === 'all' ? '' : `&category=${category}`;
            return axios.get(
                `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=7f09340f57b045b28d12fa976342ec04`
            );
        }
    }, [category]);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }


    if (!resolved) {
        return null;
    }

    //추가, 커스텀 훅스
    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const data =
        category === 'cctvWeather'
            ? resolved.data?.response?.body?.items?.item || []
            : category === 'foodBusan'
                ? resolved.data?.getFoodKr?.item || []
                : resolved.data?.articles || [];


    // const data = category === 'cctvWeather'
    //     ? resolved.data.response.body.items.item || []
    //     : category === 'foodBusan'
    //         ? resolved.data.getFoodKr.item || []
    //         : resolved.data.articles || [];



    //추가
    // resolved 값이 유효할 때
    // const { articles } = resolved.data;
    return (
        <NewsListBlock>
            {category === 'cctvWeather' ? (
                data.map((data, index) => (
                    <PdItem key={index} article={data} />
                ))
            ) : category === 'foodBusan' ? (
                data.map((data, index) => (
                    <FoodBusanItem key={index} article={data} />
                ))
            ) : (
                data.map((data) => (
                    <NewsItem key={data.url} article={data} />
                ))
            )}
        </NewsListBlock>
    );
};

export default NewsList;