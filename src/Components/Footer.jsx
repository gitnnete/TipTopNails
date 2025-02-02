import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-danger">
        <div className="text-center py-4">
          <a
            class=" text-white navbar-brand fw-bold fs-3"
            data-aos="fade-right"
            href="#"
          >
            TipTopNails.
          </a>
          <div>
            <p className="mt-4">
              <p class="text-center text-muted mt-4">
                © 2019 Tip Top Nails. All rights reserved. Built by{" "}
                <strong>Nnete Phasha</strong>.
              </p>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="text-white fs-3"
          >
            <box-icon type="logo" name="instagram-alt" color="white"></box-icon>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-white fs-3"
          >
            <box-icon
              type="logo"
              name="facebook-square"
              color="white"
            ></box-icon>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
