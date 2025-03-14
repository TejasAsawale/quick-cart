import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import watch2 from "../images/watch-2.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Quick-Cart</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active">
                      Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Tejas Asawale (tejasasawale93@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name (optional)"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc (optional)"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Selected State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <MdArrowBackIos className="me-2" /> Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shopping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-8px", right: "3px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img className="img-fluid rounded-3" src={watch2} alt="product" />
                    </div>
                    <div>
                      <h5 className="total-price">sfdfg</h5>
                      <p className="total-price">s / #dfhgf</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 100.00</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal :</p>
                  <p className="total-price">$10000.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping :</p>
                  <p className="mb-0 total-price">$10000.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-4 bprder-bottom">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$10000.00</h5>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default Checkout;
