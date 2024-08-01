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
      // Additional options can be added here
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
            <h2 className="text-danger fw-bold mb-4">Top Notch Facilities</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              deserunt qui eaque velit maxime quis labore odit eos ab delectus
              ut libero omnis eligendi illum, suscipit quidem sit officia eius
              sunt dolores. Voluptas veritatis inventore omnis minus est animi
              fugit nam tempore, earum esse sit.
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              deserunt qui eaque velit maxime quis labore odit eos ab delectus
              ut libero omnis eligendi illum.
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
            <h2 className="text-danger fw-bold mb-4">Top Notch Facilities</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              deserunt qui eaque velit maxime quis labore odit eos ab delectus
              ut libero omnis eligendi illum, suscipit quidem sit officia eius
              sunt dolores.
            </p>
            <ul>
              <li className="my-2 text-danger fw-bold">Nail polish brand</li>
              <li className="my-2 text-danger fw-bold">Nail polish brand</li>
              <li className="my-2 text-danger fw-bold">Nail polish brand</li>
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
