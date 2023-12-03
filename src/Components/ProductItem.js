import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { product, onSelect, onAddToCart } = this.props;
    const { name, image, shortDescription, price } = this.props.product;
    return (
      <div className="col-4 my-3">
        <div className="card bg-white bg-opacity-25 text-dark h-100 ">
          <div className="card-header">
            <img src={image} alt={image} className="img-fluid" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{shortDescription}</p>
            <p className="card-text">${price}</p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn btn-warning "
              data-bs-toggle="modal"
              data-bs-target="#detailModal"
              onClick={() => {
                onSelect(product);
              }}
            >
              Detail
            </button>
            <button
              className="btn btn-success "
              onClick={() => {
                onAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
