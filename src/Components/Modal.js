import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { carts, onDelete, onChangeQuantity, totalPrice } = this.props;
    return (
      <div className="modal fade" id="cartModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-light text-dark">
            <div className="modal-header">
              <h3 className="modal-title">Cart</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <table className="table table-light table-striped table-hover table-bordered table-sm align-middle text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>#</th>
                  </tr>
                </thead>

                <tbody>
                  {carts?.map((cart) => (
                    <tr key={cart.id}>
                      <td>{cart.id}</td>
                      <td>
                        <img
                          src={cart.image}
                          alt={cart.image}
                          className="img-fluid"
                          width={50}
                        />
                      </td>
                      <td>{cart.name}</td>
                      <td>
                        <button
                          className="btn btn-light"
                          onClick={() => onChangeQuantity(cart.id, -1)}
                          disabled={cart.amount === 1}
                        >
                          -
                        </button>
                        {cart.amount}
                        <button
                          className="btn btn-light"
                          onClick={() => onChangeQuantity(cart.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>${cart.amount * cart.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onDelete(cart.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th>${totalPrice}</th>
                  </tr>
                </tfoot>
              </table>
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

export default Modal;
