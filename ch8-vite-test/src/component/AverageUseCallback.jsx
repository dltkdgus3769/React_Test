import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
    return sum / numbers.length;
};

const AverageUseCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');




    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number, 10));
        setList(nextList);
        setNumber('');
    }, [number, list]); // number 또는 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);


    const previousCallback = useRef(null);
    if (previousCallback.current !== onInsert) {
        console.log("onInsert 함수 새로 생성")
    } else {
        console.log("onInsert 함수 재사용.")
    }

    previousCallback.current = onInsert;

    return (
        <div>
            <input
                value={number}
                onChange={onChange}
                placeholder="숫자를 입력하세요"
            />
            <button onClick={onInsert}>추가</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default AverageUseCallback;