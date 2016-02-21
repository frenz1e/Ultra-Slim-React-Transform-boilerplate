import React from 'react';
import Mod1 from './mod1';
import Mod2 from './mod2';
import '../../sass/main.sass';

class App extends React.Component {
  render() {
    return (
      <div>
        <Mod1 />
        <Mod2 />
        <input type="text" />
      </div>
    );
  }
}

export default App;
