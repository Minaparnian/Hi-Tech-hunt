import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
      <h2>React Component</h2>
      <p>hello</p>
      </div>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
