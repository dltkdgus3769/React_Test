import React, { Component } from 'react';

class ScrollBoxEX extends Component {
    //실습 3번 작업1
    //실습 4번 작업1
    state = {
        scrollTop: 0,
        backgroundColor: 'blue'
    };
    input = React.createRef();

    //실습 3번 작업2
    handleScroll = () => {
        this.setState({
            scrollTop: this.box.scrollTop
        })
        //실습 4번 작업2
        const { scrollTop, scrollHeight, clientHeight } = this.box;
        if (scrollTop === 0) {
            this.setState({ backgroundColor: 'blue' })
        } else if (scrollTop + clientHeight === scrollHeight) {
            this.setState({ backgroundColor: 'green' })
        } else {
            this.setState({ backgroundColor: 'red' })
        }

    }

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
            // background: 'linear-gradient(yellow, pink, red, green, white,black)'
            backgroundColor: this.state.backgroundColor
        };

        return (
            <>
                <div
                    style={style}
                    ref={(ref) => {
                        this.box = ref;
                    }}
                    //실습 3번 작업3
                    onScroll={this.handleScroll}
                //실습 4번 작업3
                >
                    <div style={innerStyle} />
                </div>
                {/* 실습 3번 작업4 */}
                <p>현재 스크롤 위치 : {this.state.scrollTop}</p>
            </>
        );
    }
}

export default ScrollBoxEX;