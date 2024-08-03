import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const ContactUs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);





  return (
    <div className="container mt-2 py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger mt-4">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 text-center" data-aos="fade-left">
          <h5>Contact Details</h5>
          <p>Email: info@company.com</p>
          <p>Phone: +1234567890</p>
          <p className="fw-bold">Pretoria Office:</p>
          <p>123 Pretoria Street</p>
          <p>Pretoria, South Africa</p>
          <p  className="fw-bold">Summit Office:</p>
          <p>456 Summit Avenue</p>
          <p>Johannesburg, South Africa</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
