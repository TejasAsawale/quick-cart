import React from "react";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch2 from "../images/watch-2.jpg";
import watch3 from "../images/watch-3.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation(); 

  return (
    <>
      <div className= {`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
      <Link to=':id' className="product-card position-relative ">
        <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent"><img src={wish} alt="wishlist"/></button>
        </div>
        <div className="product-image">
          <img src={watch2} className="img-fluid" alt="product img" />
          <img src={watch3} className="img-fluid" alt="product-img-2 " />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
          This bulk pack of 10 kids headphones is perfect for students, featuring a variety of vibrant colors to 
          keep learning fun and engaging. Designed for comfort and durability, these lightweight headphones 
          offer clear sound, adjustable headbands, and soft
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="product compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    <div className= {`${location.pathname === "/product" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative ">
        <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent"><img src={wishlist} alt="wishlist"/></button>
        </div>
        <div className="product-image">
          <img src={watch2} className="img-fluid" alt="product img" />
          <img src={watch3} className="img-fluid" alt="product-img-2 " />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
          This bulk pack of 10 kids headphones is perfect for students, featuring a variety of vibrant colors to 
          keep learning fun and engaging. Designed for comfort and durability, these lightweight headphones 
          offer clear sound, adjustable headbands, and soft
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="product compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
