import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Crausal from '../pages/Crausal';
import { Link, useLocation  } from 'react-router-dom';
import { logoutRedux } from '../store/userSlice';
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const userData = useSelector((state) => state.users); // Change this line
  // console.log(userData);
  const dispatch = useDispatch();
  const getLinkClass = (...paths) => {
    return paths.includes(location.pathname) ? 'nav-item nav-link active' : 'nav-item nav-link';
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });


    // Scroll listener
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    
    AOS.init({ duration: 1000 });
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fixed Navbar logic
    const fixedTop = document.querySelector('.fixed-top');
    const topBarHeight = document.querySelector('.top-bar').offsetHeight;

    if (fixedTop) {
      if (scrolled) {
        fixedTop.classList.add('bg-dark');
        fixedTop.style.top = '0';
      } else {
        fixedTop.classList.remove('bg-dark');
        fixedTop.style.top = `${topBarHeight}px`;
      }
    }
  }, [scrolled]);

  //handle login logout
  const [ShowLoginOut, hideLoginOut] = useState(false);
  const handleLoginOut = () => {
    hideLoginOut((preve) => !preve);
  }
  const handleLogout = () => {
    dispatch(logoutRedux())
  }

  return (
    <>
      {/* Topbar Start */}
      <div
        className={`container-fluid top-bar bg-dark text-light px-0 ${scrolled ? 'top-bar-fixed' : ''}`}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <div className="row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="small text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="small text-light" href="#">
                  Career
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="small text-light" href="#">
                  Terms
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="small text-light" href="#">
                  Privacy
                </a>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn-lg-square text-primary border-end rounded-0"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn-lg-square text-primary border-end rounded-0"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn-lg-square text-primary border-end rounded-0"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn-lg-square text-primary pe-0" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 ${scrolled ? 'navbar-scrolled' : ''}`}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-primary m-0">OvenWhisk</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${getLinkClass('/')}`}>
              Home
            </Link>
            <Link to="about-us" className={`nav-item nav-link ${getLinkClass('/about-us')}`}>
              About
            </Link>
            <Link to="services" className={`nav-item nav-link ${getLinkClass('/services')}`}>
              Services
            </Link>
            <Link to="products" className={`nav-item nav-link ${getLinkClass('/products')}`}>
              Products
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className={getLinkClass('/team', '/test', '/signup')} 
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <Link to="team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/test" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/signup" className="dropdown-item">
                  Signup
                </Link>
                
              </div>
            </div>
            <Link to="contact" className={`nav-item nav-link ${getLinkClass('/contact')}`}>
              Contact
            </Link>
            {userData.name ? (
            <Link to="/Login" className={getLinkClass('')} onClick={handleLogout}>
            Logout
          </Link>
          ) : (
            <Link to="/Login" className={getLinkClass('/Login')}>
            Login
          </Link>
          )}
          {userData.name ? (
            <Link to="" className={getLinkClass('')}>
            Welcome {userData.name}
          </Link>
          ) : (
            <Link to="" className={getLinkClass('')}>
            Welcome Guest!
          </Link>
          )}
          </div>
          <div className=" d-none d-lg-flex">
            <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
              <i className="fa fa-phone text-primary" />
            </div>
            <div className="ps-3">
              <small className="text-primary mb-0">Call Us</small>
              <p className="text-light fs-5 mb-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      
    </>
  );
}

export default Header;
