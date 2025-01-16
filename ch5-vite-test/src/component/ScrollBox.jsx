import React, { Component } from 'react';

class ScrollBox extends Component {
    state = {
        scrollState: 0
    };
    box = React.createRef();


    updateScrollState = (e) => {
        const scrollTop = e.target.scrollTop;  // 이벤트 객체에서 scrollTop 값을 읽음
        this.setState({
            scrollState: scrollTop  // 상태에 스크롤 위치 저장
        });
    };

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = scrollHeight - clientHeight;
    };



    scrollToTop = () => {
        // const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = 0;
    };
    scrollToMiddle = () => {
        // const { scrollHeight, clientHeight } = this.box;
        /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = 175;
    };


    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(yellow, pink, red, green, white,black)'
        };

        return (
            <><div
                style={style}
                ref={(ref) => {
                    this.box = ref;
                }}
                onScroll={this.updateScrollState}
            >
                <div style={innerStyle} />
            </div>
                <div>스크롤 위치: {this.state.scrollState}</div>
            </>

        );
    }
}

export default ScrollBox;