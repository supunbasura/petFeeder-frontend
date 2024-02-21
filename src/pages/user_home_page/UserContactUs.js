import React from "react";
import ContactUsForm from "../../components/ContactUs/ContactUsForm";

const UserContactUs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pt-10">
            <h2
              className="text-uppercase"
              data-aos={"fade-up"}
              data-aos-delay={100}
              data-aos-duration={700}
            >
              Contact Us
            </h2>
            <h4
              className="text-uppercase pb-4"
              data-aos={"fade-up"}
              data-aos-delay={200}
              data-aos-duration={700}
            >
              send message to us
            </h4>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserContactUs;
