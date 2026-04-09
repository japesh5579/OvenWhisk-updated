import React from 'react'
import { Link } from 'react-router-dom'
import team1 from "../img/team-1.jpg"
import team2 from "../img/team-2.jpg"
import team3 from "../img/team-3.jpg"
import team4 from "../img/team-4.jpg"
import about1 from "../img/about-1.jpg"
import about2 from "../img/about-2.jpg"
function AboutUs() {
  return (
    <div>
  {/* Page Header Start */}
  <div
      className="container-fluid page-header py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5 pb-3">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        About
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
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}


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
                <p className="text-primary text-uppercase mb-2">About Us</p>
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


    {/* Team Start */}
<div className="container-xxl py-6">
  <div className="container">
    <div
      className="text-center mx-auto mb-5"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ maxWidth: 500 }}
    >
      <p className="text-primary text-uppercase mb-2">Our Team</p>
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
    </div>
  )
}

export default AboutUs