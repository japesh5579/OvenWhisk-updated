import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import cara1 from "../img/carousel-1.jpg";
import cara2 from "../img/carousel-2.jpg";

function Crausal() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 pb-5" data-aos="fade-in" data-aos-delay="100">
        <Carousel fade controls indicators>
          <Carousel.Item>
            <div className="carousel-image" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649466.jpg?t=st=1721289338~exp=1721292938~hmac=f72f55ac585a815b116911e231fead8d4ebe7f264f14a5c5fe47baa5f23c6d77&w=1060")` }}>
              <div className="overlay"></div>
              <Carousel.Caption>
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8" data-aos="slide-right">
                      <p className="text-primary text-uppercase fw-bold mb-2">
                        The Best Bakery
                      </p>
                      <h1 className="display-1 text-light mb-4">
                        We Bake With Passion
                      </h1>
                      <p className="text-light fs-5 mb-4 pb-3">
                      From Oven to Table, Freshly Baked Happiness
                      </p>
                      <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/chocolate-cake-with-chocolate-nuts-wooden-cutting-board_923143-612.jpg?w=1060")` }}>
              <div className="overlay"></div>
              <Carousel.Caption>
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8" data-aos="slide-right">
                      <p className="text-primary text-uppercase fw-bold mb-2">
                        The Best Bakery
                      </p>
                      <h1 className="display-1 text-light mb-4">
                        We Bake With Passion
                      </h1>
                      <p className="text-light fs-5 mb-4 pb-3">
                      Experience the Essence of Homemade Goodness.
                      </p>
                      <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Carousel End */}
    </>
  );
}

export default Crausal;

