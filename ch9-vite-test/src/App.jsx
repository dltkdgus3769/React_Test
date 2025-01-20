import React, { Component } from 'react';
import SassComponent from './component/SassComponent';
import CSSModule from './component/CSSModule';
import StyledComponent from './component/styledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        {/* <CSSModule /> */}
        {/* <StyledComponent /> */}
      </div>
    );
  }
}

export default App;