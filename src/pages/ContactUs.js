import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div>
      {/* Page Header Start */}
    <div
      className="container-fluid page-header py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5 pb-3">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          Contact Us
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
              Contact
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}

    <>
  {/* Contact Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="text-primary text-uppercase mb-2">Contact Us</p>
        <h1 className="display-6 mb-4">
          If You Have Any Query, Please Contact Us
        </h1>
      </div>
      <div className="row g-0 justify-content-center">
        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <p className="text-center mb-4">
           Your Querry will be resolved shortly
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 200 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button
                  className="btn btn-primary rounded-pill py-3 px-5"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Google Map Start */}
  <div className="container-xxl py-6 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <iframe
      className="w-100 mb-n2"
      style={{ height: 450 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameBorder={0}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  {/* Google Map End */}
</>

    </div>
  )
}

export default ContactUs