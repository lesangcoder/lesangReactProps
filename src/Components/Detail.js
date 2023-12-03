import React, { Component } from "react";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { alias, description, id, image, name, price, quantity } =
      this.props.onSelectedProduct;
    return (
      <div className="modal fade" id="detailModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-light text-dark">
            <div className="modal-header">
              <h3 className="modal-title">{name}</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <img src={image} alt={image} className="img-fluid" />
                </div>
                <div className="col-6">
                  <p className="modal-text">
                    <b>ID:</b> {id}
                  </p>
                  <p className="modal-text">
                    <b>Name:</b> {name}
                  </p>
                  <p className="modal-text">
                    <b>Alias:</b> {alias}
                  </p>
                  <p className="modal-text">
                    <b>Price:</b> {price}
                  </p>
                  <p className="modal-text">
                    <b>Quantity:</b> {quantity}
                  </p>
                  <p className="modal-text">
                    <b>Description:</b> {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
