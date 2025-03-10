import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nailshop from "../../assets/nailshop.jpg";
import nailpolish from "../../assets/nailpolish.jpg";

const HalfSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center mt-5 "
            data-aos="fade-right"
          >
            <img
              className="rounded"
              src={nailshop}
              alt="Descriptive Alt Text"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6 mt-5" data-aos="fade-right">
            <h2 className="text-danger fw-bold mb-4">Our Top Notch Facilities</h2>
            <p className="lead">
              Welcome to our nail salon, where luxury meets comfort. Our
              state-of-the-art facilities are designed to provide you with an
              unparalleled pampering experience. Enjoy our serene and relaxing
              environment, complete with plush seating, modern décor, and
              ambient lighting. We offer a wide range of services, including
              manicures, pedicures, and nail art, all performed by our highly
              trained and friendly staff.
            </p>
            <p className="lead">
              Whether you're looking for a quick touch-up or a full day of
              indulgence, our salon is equipped to meet all your needs. Relax,
              unwind, and let us take care of the rest.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-6 order-md-1 order-2 mt-5"
            data-aos="fade-left"
          >
            <h2 className="text-danger fw-bold mb-4">The Best Brands</h2>
            <p className="lead">
              At our salon, we pride ourselves on offering only the best nail
              polish brands. You'll find an extensive selection from top names
              in the industry, ensuring vibrant, long-lasting colors for every
              preference. Our collection includes high-quality, chip-resistant
              polishes that provide a flawless finish.
            </p>
            <ul>
              <li className="my-2 text-danger fw-bold">Opi</li>
              <li className="my-2 text-danger fw-bold">Essie</li>
              <li className="my-2 text-danger fw-bold">Sally Hansen</li>
            </ul>
          </div>
          <div
            className="col-md-6 order-md-2 order-1 d-flex align-items-center justify-content-center mt-5"
            data-aos="fade-left"
          >
            <img
              className="rounded"
              src={nailpolish}
              alt="Descriptive Alt Text"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HalfSection;
