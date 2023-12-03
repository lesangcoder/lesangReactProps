import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { products, onSelect, onAddToCart } = this.props;
    return (
      <div className="row">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={onSelect}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
