import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <BreadCrumb title="Term And Conditions" />
      <Meta title={"Term And Conditions"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  Terms and Conditions 1. Introduction Welcome to Quick-Cart.
                  <br />
                  These Terms and Conditions govern your use of our website and
                  services. By accessing or using our website, you agree to
                  comply with these terms. If you do not agree with any part of
                  these terms, please do not use our website.
                  <br />
                  2. Use of the Website You must be at least 18 years old to use
                  our services. You agree not to use the website for any illegal
                  or unauthorized purpose. You must not attempt to gain
                  unauthorized access to any part of the website. 3.
                  Intellectual Property All content, including text, images,
                  logos, and trademarks, is the property of [Your Website Name]
                  and is protected by intellectual property laws. You may not
                  copy, modify, distribute, or use any content without prior
                  written consent. 4. User Accounts If you create an account,
                  you are responsible for maintaining its confidentiality. You
                  must provide accurate and complete information when
                  registering. We reserve the right to terminate accounts that
                  violate these terms. 5. Purchases and Payments All purchases
                  made through our website are subject to our refund and
                  cancellation policies. Prices and availability of products are
                  subject to change without notice. 6. Limitation of Liability
                  We are not liable for any indirect, incidental, or
                  consequential damages arising from the use of our website. We
                  do not guarantee that the website will always be available,
                  error-free, or secure. 7. Privacy Policy Our Privacy Policy
                  governs the collection and use of your personal information.
                  By using our website, you consent to our data practices as
                  outlined in our Privacy Policy. 8. Changes to These Terms We
                  reserve the right to update or modify these Terms and
                  Conditions at any time. Continued use of the website after
                  changes are made constitutes your acceptance of the updated
                  terms. 9. Contact Us If you have any questions about these
                  Terms and Conditions, please contact us at [Your Contact
                  Information]. Last Updated: [Date]
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
