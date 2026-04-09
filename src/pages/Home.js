import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import about1 from "../img/about-1.jpg"
import about2 from "../img/about-2.jpg"

import pro1 from "../img/product-1.jpg"
import pro2 from "../img/product-2.jpg"
import pro3 from "../img/product-3.jpg"


import ser1 from "../img/service-1.jpg"
import ser2 from "../img/service-2.jpg"

import team1 from "../img/team-1.jpg"
import team2 from "../img/team-2.jpg"
import team3 from "../img/team-3.jpg"
import team4 from "../img/team-4.jpg"

import test1 from "../img/testimonial-1.jpg"
import test2 from "../img/testimonial-2.jpg"
import test3 from "../img/testimonial-3.jpg"
import test4 from "../img/testimonial-4.jpg"
import Testimonial from './Testimonial';
import Crausal from './Crausal';


function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <Crausal/>
  {/* Facts Start */}
  <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="100">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-primary mb-4" />
                <p className="mb-2">Years Experience</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  50
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="300">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users fa-4x text-primary mb-4" />
                <p className="mb-2">Skilled Professionals</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  175
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="500">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-bread-slice fa-4x text-primary mb-4" />
                <p className="mb-2">Total Products</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  135
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-in" data-aos-delay="700">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-cart-plus fa-4x text-primary mb-4" />
                <p className="mb-2">Order Everyday</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  9357
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      
      {/* About Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="row img-twice position-relative h-100">
                <div className="col-6">
                  <img className="img-fluid rounded" src={about1} alt="" />
                </div>
                <div className="col-6 align-self-end">
                  <img className="img-fluid rounded" src={about2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">// About Us</p>
                <h1 className="display-6 mb-4">
                  We Bake Every Item From The Core Of Our Hearts
                </h1>
                <p>
                Welcome to our online bakery, where the aroma of freshly baked goods meets the convenience of online shopping. We are passionate about crafting delicious treats that bring joy to your table. 
                </p>
                <p>
                Our journey began with a simple love for baking, and today, we blend tradition with innovation to offer you a delightful culinary experience."
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2" />
                    Quality Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2" />
                    Custom Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2" />
                    Online Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2" />
                    Home Delivery
                  </div>
                </div>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
  {/* Product Start */}
  <div className="container-xxl bg-light my-6 py-6 pt-0">
    <div className="container">
      <div
        className="bg-primary text-light rounded-bottom p-5 my-6 mt-0" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 text-light mb-0">
              The Best Bakery In Your City
            </h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="d-inline-flex align-items-center text-start">
              <i className="fa fa-phone-alt fa-4x flex-shrink-0" />
              <div className="ms-4">
                <p className="fs-5 fw-bold mb-0">Call Us</p>
                <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center mx-auto mb-5" data-aos="fade-up" data-aos-delay="100"
        style={{ maxWidth: 500 }}
      >
        <p className="text-primary text-uppercase mb-2">Bakery Products</p>
        <h1 className="display-6 mb-4">
          Explore The Categories Of Our Bakery Products
        </h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
            <div className="text-center p-4">
              <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                500 ₹ - 2099 ₹
              </div>
              <h3 className="mb-3">Cake</h3>
              <span>
              Elevate your moments with our exquisite cakes, each masterpiece handcrafted to perfection.
              </span>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src={pro1} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-lg-square btn-outline-light rounded-circle"
                  href=""
                >
                  <i className="fa fa-eye text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
            <div className="text-center p-4">
              <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
                500 ₹ - 2099 ₹
              </div>
              <h3 className="mb-3">Bread</h3>
              <span>
              From crusty loaves to soft rolls, our breads are a testament to quality and craftsmanship.
              </span>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src={pro2} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-lg-square btn-outline-light rounded-circle"
                  href=""
                >
                  <i className="fa fa-eye text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
            <div className="text-center p-4">
              <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
              500 ₹ - 2099 ₹
              </div>
              <h3 className="mb-3">Cookies</h3>
              <span>
              Savor the crunch of perfection with every bite of our freshly baked cookies.
              </span>
            </div>
            <div className="position-relative mt-auto">
              <img className="img-fluid" src={pro3} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-lg-square btn-outline-light rounded-circle"
                  href=""
                >
                  <i className="fa fa-eye text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product End */}
  
  {/* Service Start */}
<div className="container-xxl py-6">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <p className="text-primary text-uppercase mb-2"> Our Services</p>
        <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
        <p className="mb-5">
        Our bakery offers a variety of services tailored to satisfy your cravings and cater to your special occasions. From daily fresh bread and pastries to custom-designed cakes for weddings and birthdays, we provide a range of delicious options to suit every taste and celebration. 
        </p>
        <div className="row gy-5 gx-4">
          <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                <i className="fa fa-bread-slice text-white" />
              </div>
              <h5 className="mb-0">Quality Products</h5>
            </div>
            <span>
            Passionate Bakers, Irresistible Creations.
            </span>
          </div>
          <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                <i className="fa fa-birthday-cake text-white" />
              </div>
              <h5 className="mb-0">Custom Products</h5>
            </div>
            <span>
            Baked Fresh Daily, Just for You.
            </span>
          </div>
          <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                <i className="fa fa-cart-plus text-white" />
              </div>
              <h5 className="mb-0">Online Order</h5>
            </div>
            <span>
            Crafted with Care, Baked with Love.
            </span>
          </div>
          <div className="col-sm-6" data-aos="fade-up" data-aos-delay="500">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                <i className="fa fa-truck text-white" />
              </div>
              <h5 className="mb-0">Home Delivery</h5>
            </div>
            <span>
            From Oven to Table, Freshly Baked Happiness.            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
        <div className="row img-twice position-relative h-100">
          <div className="col-6">
            <img
              className="img-fluid rounded"
              src={ser1}
              alt=""
            />
          </div>
          <div className="col-6 align-self-end">
            <img
              className="img-fluid rounded"
              src={ser2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Service End */}

{/* Team Start */}
<div className="container-xxl py-6">
  <div className="container">
    <div
      className="text-center mx-auto mb-5"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ maxWidth: 500 }}
    >
      <p className="text-primary text-uppercase mb-2">// Our Team</p>
      <h1 className="display-6 mb-4">
        We're Super Professional At Our Skills
      </h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="team-item text-center rounded overflow-hidden">
          <img className="img-fluid" src={team1} alt="" />
          <div className="team-text">
            <div className="team-title">
              <h5>James Johnson </h5>
              <span>Pastry Chef</span>
            </div>
            <div className="team-social">
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="team-item text-center rounded overflow-hidden">
          <img className="img-fluid" src={team2} alt="" />
          <div className="team-text">
            <div className="team-title">
              <h5>Sarah Brown</h5>
              <span>Cake Decorator</span>
            </div>
            <div className="team-social">
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="team-item text-center rounded overflow-hidden">
          <img className="img-fluid" src={team3} alt="" />
          <div className="team-text">
            <div className="team-title">
              <h5>David Clark</h5>
              <span>Bread Specialist</span>
            </div>
            <div className="team-social">
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="team-item text-center rounded overflow-hidden">
          <img className="img-fluid" src={team4} alt="" />
          <div className="team-text">
            <div className="team-title">
              <h5>Will Smith</h5>
              <span>Head Baker</span>
            </div>
            <div className="team-social">
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Team End */}
<Testimonial/>

</>


  )
}

export default Home