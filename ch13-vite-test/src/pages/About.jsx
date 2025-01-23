import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    // const location = useLocation();
    //추가
    const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams 호출 형태 수정
    const detail = searchParams.get('detail'); // 'detail' 값 가져오기
    const mode = searchParams.get('mode'); // 'mode' 값 가져오기
    const lang = searchParams.get('lang');
    //추가
    // detail 값을 토글하는 함수
    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? 'false' : 'true', lang });
    };

    //추가
    // mode 값을 증가시키는 함수
    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail, lang });
    };
    const onChangeLanguage = (language) => {
        setSearchParams({ mode, detail, lang: language });
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            {/* //추가 */}
            {/* <p>쿼리스트링 location.search: {location.search}</p>
            <p>현재 주소의 경로 location.pathname: {location.pathname}</p>
            <p>location.hash: {location.hash}</p>
            <p>location.state: {location.state}</p>
            <p>location.key: {location.key}</p> */}
            {/* 추가 */}
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <p>language: {lang}</p>
            <button onClick={() => onChangeLanguage('en')}>영어</button>
            <button onClick={() => onChangeLanguage('ko')}>한글</button>

            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;