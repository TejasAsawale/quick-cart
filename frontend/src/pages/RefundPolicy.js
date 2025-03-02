import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const RefundPolicy = () => {
  return (
    <>
      <BreadCrumb title="Refund Policy" />
      <Meta title={"Refund Policy"} />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <diV className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  Refund Policy 1. Introduction At [Your Website Name], customer
                  satisfaction is our priority. If you are not satisfied with
                  your purchase, we offer a refund policy as outlined below. 2.
                  Eligibility for Refunds Items must be returned within [X] days
                  of purchase. Items must be unused, in their original
                  packaging, and in the same condition as received. Proof of
                  purchase is required for all refunds. 3. Non-Refundable Items
                  Gift cards Downloadable software products Perishable goods
                  Items marked as final sale 4. Refund Process To initiate a
                  refund, contact our support team at [Your Contact
                  Information]. Once your return is received and inspected, we
                  will notify you of the approval or rejection of your refund.
                  Approved refunds will be processed within [X] business days to
                  your original payment method. 5. Late or Missing Refunds If
                  you haven’t received your refund, first check your bank
                  account again. Contact your credit card company, as it may
                  take some time before your refund is officially posted. If you
                  still have not received your refund, contact us at [Your
                  Contact Information]. 6. Exchanges We replace items only if
                  they are defective or damaged. If you need an exchange,
                  contact us at [Your Contact Information]. 7. Changes to This
                  Policy We reserve the right to modify this refund policy at
                  any time. Any updates will be posted on this page. 8. Contact
                  Us For any questions regarding refunds, contact us at [Your
                  Contact Information]. Last Updated: [Date]
                </p>
              </div>
            </div>
          </div>
        </diV>
      </section>
    </>
  );
};

export default RefundPolicy;
