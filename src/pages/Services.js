import React from 'react'
import { Link } from 'react-router-dom'
import ser1 from "../img/service-1.jpg"
import ser2 from "../img/service-2.jpg"
function Services() {
  return (
    <div>
        {/* Page Header Start */}
    <div
      className="container-fluid page-header py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5 pb-3">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        Services
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
              Services
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
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

    </div>
  )
}

export default Services