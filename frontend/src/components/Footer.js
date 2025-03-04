import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 302 Near Nehru Nagar Chowk, <br /> Pune, Maharashtra{" "}
                  <br />
                  PinCode: 411 018
                </address>
                <a
                  href="tel:+91 8459928313"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8459928313
                </a>
                <a
                  href="mailto:tejasasawale93@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  tejasasawale93@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to='/privacy-policy' className="text-white mb-1 py-2">Privacy Policy</Link>
                <Link to='/refund-policy' className="text-white mb-1 py-2">Refund Policy</Link>
                <Link to='/shipping-policy' className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link to='/term-and-conditions' className="text-white mb-1 py-2">Terms & Conditions</Link>
                <Link to='/blogs' className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link className="text-white mb-1 py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Smartphones</Link>
                <Link className="text-white mb-1 py-2">Watches</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by QuickCart Dev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
