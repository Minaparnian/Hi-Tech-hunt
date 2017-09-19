import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../stores/ProductStore';

@connectToStores
class App extends React.Component {
  constructor() {
    super();
  }

// the static functions belong to alt function, so the first one it will tell you which store it will like to connect you and the second one will get the own state variable of that store.
  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  render(){
    return (
      <section>
        <Navbar user={this.props.user}/>
        <HomePage/>
      </section>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
