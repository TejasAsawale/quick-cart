import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation(); 

  return (
    <>
      <div className= {`${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative ">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"/></Link>
        </div>
        <div className="product-image">
          <img src="images/watch-2.jpg" className="img-fluid" alt="product img" />
          <img src="images/watch-3.jpg" className="img-fluid" alt="product-img-2 " />
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
          <p className="description">
          This bulk pack of 10 kids headphones is perfect for students, featuring a variety of vibrant colors to 
          keep learning fun and engaging. Designed for comfort and durability, these lightweight headphones 
          offer clear sound, adjustable headbands, and soft
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="product compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className= {`${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative ">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"/></Link>
        </div>
        <div className="product-image">
          <img src="images/watch-2.jpg" className="img-fluid" alt="product img" />
          <img src="images/watch-3.jpg" className="img-fluid" alt="product-img-2 " />
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
          <p className="description">
          This bulk pack of 10 kids headphones is perfect for students, featuring a variety of vibrant colors to 
          keep learning fun and engaging. Designed for comfort and durability, these lightweight headphones 
          offer clear sound, adjustable headbands, and soft
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="product compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
