import React from 'react'
import {Link} from 'react-router-dom'

import pro1 from "../img/product-1.jpg"
import pro2 from "../img/product-2.jpg"
import pro3 from "../img/product-3.jpg"
function Products() {
  return (
    <div>  
      {/* Page Header Start */}
    <div
      className="container-fluid page-header py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5 pb-3">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          Products
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
              Products
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
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
    
    
    </div>
  )
}

export default Products