import React, {
  useContext, useState
} from 'react'
import { Link, useNavigate } from 'react-router-dom';


import SummaryApi from '../common';
import Context from '../context';

import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
})
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context)

   
    const handleOnChange = (e) => {
      const { name, value } = e.target

      setData((preve) => {
          return {
              ...preve,
              [name]: value
          }
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()
    console.log("data login data ", dataApi);
    if (dataApi.success) {
        toast.success(dataApi.message)
        navigate('/')
        fetchUserDetails()
      
    }

    if (dataApi.error) {
        toast.error(dataApi.message)
    }

}



  return (
    <>
       {/* Page Header Start */}
       <div
      className="container-fluid page-header py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5 pb-3">
        <h1 className="display-4 text-white animated slideInDown mb-3">
        Login
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
              Login
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
    <section className="bg-light py-10 py-md-10 py-5" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-primary m-0">OvenWhisk</h1>
        </Link>
                </div>
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                  Sign in to your account
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={data.email}
                          onChange={handleOnChange}
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email 
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={data.password}
                          onChange={handleOnChange}
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password 
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex gap-2 justify-content-between">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="rememberMe"
                          >
                            Keep me logged in
                          </label>
                        </div>
                        <a href="#!" className="link-primary text-decoration-none">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Log in
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        Don't have an account?{' '}
                        <Link to="/signup" className="link-primary text-decoration-none">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  
    </>
  );
}

export default Login;

