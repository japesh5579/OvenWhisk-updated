import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom'

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (

<>
      {/* Page Header Start */}
        <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
          Testimonial
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
    <div className="container-xxl bg-light my-6 py-6 pb-0">
      <div className="container">
        <div
          className="text-center mx-auto mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: 500 }}
        >
          <p className="text-primary text-uppercase mb-2">Client's Review</p>
          <h1 className="display-6 mb-4">
            More Than 20000+ Customers Trusted Us
          </h1>
        </div>
        <Carousel
          interval={3000} // Adjust carousel interval as needed
          pause={false}   // Disable pause on hover if desired
          className="testimonial-carousel"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="img-fluid h-50 w-50 rounded rounded-md border border-2 border-light"
                src={`https://img.freepik.com/premium-photo/young-smart-hispanic-businessman-smiling-face-standing-blur-background-busy-office-generative-ai-aig20_31965-159590.jpg?w=900`}
                alt="First testimonial"
              />
              <Carousel.Caption className="text-center">
                <h5 className="text-light">John Thompson </h5>
                <p className="text-light">
                "The team exceeded our expectations with their creativity and flavors!"
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="img-fluid h-50 w-50 rounded rounded-md border border-2 border-light"
                src={`https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328206.jpg?t=st=1720251692~exp=1720255292~hmac=b7624ff290d2f1ddad714a47d339356f6ebdf96329853a45cf98a43ee1a6103e&w=900`}
                alt="Second testimonial"
              />
              <Carousel.Caption className="text-center">
                <h5 className="text-light">Emilano Roberts</h5>
                <p className="text-light">
                "Best cookies in town! Always a treat to visit."
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="img-fluid h-50 w-50 rounded rounded-md border border-2 border-light"
                src={`https://img.freepik.com/premium-photo/young-handsome-indian-businessman-wearing-blue-suit-against-black-wall_251136-70355.jpg?w=900`}
                alt="Third testimonial"
              />
              <Carousel.Caption className="text-center">
                <h5 className="text-light">Michael Davis</h5>
                <p className="text-light">
                "Absolutely love the fresh bread and friendly service!"
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="img-fluid h-50 w-50 rounded rounded-md border border-2 border-light"
                src={`https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-busy-office-generative-ai-aig20_31965-130084.jpg?w=900`}
                alt="Fourth testimonial"
              />
              <Carousel.Caption className="text-center">
                <h5 className="text-light">Rachel Lee</h5>
                <p className="text-light">
                "The cakes here are not just desserts; they're works of art!"
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
        <div
          className="bg-primary text-light rounded-top p-5 my-6 mb-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 text-light mb-0">
                Subscribe Our Newsletter
              </h1>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="position-relative">
                <input
                  className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
               <Link to="/signup">
               <button
                  type="button"
                  className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>

  );
}

export default Testimonial;
