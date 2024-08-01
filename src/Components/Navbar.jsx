import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      // Additional options can be added here
    });
  }, []);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navLogo navbar-brand fw-bold fs-3" data-aos="fade-right" href="#">
          TipTopNails.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto" data-aos="fade-right">
            <li class="nav-item">
              <Link class="nav-link active mx-3 fs-5" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link mx-3 fs-5" to="/OurStory">
                Our Story
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link mx-3 fs-5" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
