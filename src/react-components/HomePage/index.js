import React from 'react';
import ProductList from '../Product/ProductList'

import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';
import Actions from '../../actions';

@connectToStores
class HomePage extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   productList: null
    // }
    //
    // Firebase.database().ref('products').on('value', (snapshot) => {
    //  debugger;
    //   var products = snapshot.val();
    //
    //   this.setState({
    //     productList: products.slice(1)
    //   })
    // });
    Actions.getProducts();
  }

  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
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
               this.props.products
               ?
              //  we can get this.props.products because this page is connected to ProductStore where we have products state which contain all the list of products.
               <ProductList productList={this.props.products}/>
               :
               null
             }
           </section>
         </section>
       </section>
     );
   }
 }

 export default HomePage;
