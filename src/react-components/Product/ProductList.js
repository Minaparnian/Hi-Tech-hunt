import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    console.warn('products!', this.props.productList);
  }
  render () {
    console.log("*********************");
    console.log(this.props);

    return (
      <ul className="product-list">
          <ProductItem
            name = {this.props.productList[0].name}
            link = {this.props.productList[0].link}
            media = {this.props.productList[0].media}
            upvote = {this.props.productList[0].upvote}
            description = {this.props.productList[0].description}
            maker = {this.props.productList[0].maker}
            />

          <ProductItem
              name = {this.props.productList[1].name}
              link = {this.props.productList[1].link}
              media = {this.props.productList[1].media}
              upvote = {this.props.productList[1].upvote}
              description = {this.props.productList[1].description}
              maker = {this.props.productList[1].maker}
              />

              
      </ul>

    );
  }
}

export default ProductList;
