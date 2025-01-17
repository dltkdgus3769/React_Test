import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
    return sum / numbers.length;
};

const AverageEx = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const [lastAddedIndex, setLastAddedIndex] = useState(null);
    //추가1
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        if (e.target.value !== '-') {
            if (isNaN(e.target.value) == true) {
                alert("숫자만 입력하세요!")
                return;
            }
            if (e.target.value < 1 || e.target.value > 100) {
                alert("1이상 100이하 숫자 입력하세요!")
                e.target.value = null;
            }
        }
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        if (number === '-') {
            alert("숫자만 입력하세요!")
            return;
        }
        if (parseInt(number, 10) < 0) {
            alert("0보다 큰수를 입력하세요!")
            return;
        }
        const nextList = list.concat(parseInt(number, 10));
        setList(nextList);
        setLastAddedIndex(nextList.length - 1);
        setNumber('');
        //추가2
        inputEl.current.focus(); // 입력창 포커스
    }, [number, list]); // number 혹은 list가 바뀔 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]); // list가 변경될 때만 평균값 계산

    return (
        <div>
            <input
                value={number}
                onChange={onChange}
                //추가3
                ref={inputEl}
                placeholder="숫자를 입력하세요"
            />
            <button onClick={onInsert}>추가</button>
            <ul>
                {list.map((value, index) => (
                    value > avg &&
                    <li
                        key={index}
                        style={{
                            color: index === lastAddedIndex ? 'red' : 'black'
                        }}
                    >
                        {value}
                    </li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default AverageEx;