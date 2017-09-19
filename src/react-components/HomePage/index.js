import React from 'react';
import ProductList from '../Product/ProductList'
import Firebase from 'firebase';


var config = {
  apiKey: "AIzaSyD8Vk2Cgn7KJWJLid1dYtMx6jzZnlVFi-o",
  authDomain: "aus-tec-hunt.firebaseapp.com",
  databaseURL: "https://aus-tec-hunt.firebaseio.com/",
  storageBucket: "aus-tec-hunt.appspot.com"
};

Firebase.initializeApp(config);


class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: null
    };

    Firebase.database().ref('products').on('value', (snapshot) => {
      // debugger;
      var products = snapshot.val();

      this.setState({
        productList: products.slice(1)
      })
    });
  }

  render(){
    return(
      <section>
          <header>
            <img src="/img/banner.jpeg" width="100%" />
          </header>

          <section>
            <section className="container">
              {
                this.state.productList ? <ProductList productList={this.state.productList}/> : null
              }
            </section>
          </section>
      </section>

    );
  }
}

export default HomePage;
