import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <BreadCrumb title="Privacy Policy" />
      <Meta title={"Privacy Policy"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  Privacy Policy 1. Introduction Welcome to [Your Website Name].
                  Your privacy is important to us. This Privacy Policy explains
                  how we collect, use, and protect your personal information
                  when you visit our website. 2. Information We Collect Personal
                  Information: Name, email address, phone number, billing
                  information, etc. Non-Personal Information: IP address,
                  browser type, device information, cookies, etc. 3. How We Use
                  Your Information To provide and improve our services. To
                  process transactions and send order confirmations. To
                  communicate with you regarding updates, promotions, and
                  customer support. To ensure security and prevent fraudulent
                  activities. 4. Cookies and Tracking Technologies We use
                  cookies and similar technologies to enhance user experience
                  and analyze website traffic. You can manage cookie preferences
                  in your browser settings. 5. Data Sharing and Third-Party
                  Services We do not sell your personal data. We may share
                  information with trusted third parties for payment processing,
                  analytics, and service enhancements. Legal obligations may
                  require us to disclose data when necessary. 6. Data Security
                  We implement security measures to protect your information.
                  However, no method of transmission over the internet is 100%
                  secure. 7. Your Rights and Choices You can request access,
                  modification, or deletion of your personal data. You may
                  opt-out of marketing emails by following the unsubscribe link.
                  8. Changes to This Privacy Policy We reserve the right to
                  update this policy at any time. Continued use of our website
                  after changes are made constitutes acceptance of the updated
                  policy. 9. Contact Us If you have any questions about this
                  Privacy Policy, please contact us at [Your Contact
                  Information]. Last Updated: [Date]
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
