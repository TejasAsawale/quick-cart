import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrumb title="Shipping Policy" />
      <Meta title={"Shipping Policy"} />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <diV className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  **Shipping Policy** **1. Introduction** At [Your Website
                  Name], we strive to provide timely and reliable shipping for
                  all our customers. This Shipping Policy explains our shipping
                  process, estimated delivery times, and associated costs. **2.
                  Processing Time** - Orders are processed within [X] business
                  days. - Orders placed on weekends or holidays will be
                  processed on the next business day. - Delays may occur during
                  high-demand periods. **3. Shipping Rates and Delivery
                  Estimates** - Shipping charges are calculated at checkout
                  based on the destination and shipping method selected. -
                  Estimated delivery times: - Standard Shipping: [X] business
                  days - Express Shipping: [X] business days - International
                  Shipping: [X] business days **4. Order Tracking** - Once your
                  order is shipped, you will receive a tracking number via
                  email. - You can track your order using the provided tracking
                  link. **5. International Shipping** - We ship to select
                  countries outside [Your Country]. - International shipping
                  rates vary based on location. - Customers are responsible for
                  any customs duties, taxes, or import fees. **6. Lost or
                  Damaged Shipments** - If your package is lost in transit,
                  please contact us immediately. - If your order arrives
                  damaged, please provide photos and contact us within [X] days
                  of delivery. **7. Returns Due to Incorrect Address** - If an
                  order is returned due to an incorrect or incomplete address,
                  the customer is responsible for reshipping fees. **8. Changes
                  to This Policy** - We reserve the right to modify this
                  shipping policy at any time. - Any updates will be posted on
                  this page. **9. Contact Us** For any questions regarding
                  shipping, contact us at [Your Contact Information]. **Last
                  Updated:** [Date]
                </p>
              </div>
            </div>
          </div>
        </diV>
      </section>
    </>
  );
};

export default ShippingPolicy;
