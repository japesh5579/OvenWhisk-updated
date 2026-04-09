import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { loginRedux } from './store/userSlice';
import $ from 'jquery';
import ScrollToTop from './components/ScrollToTop';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const dispatch = useDispatch();

  // ✅ Backend Disconnected: Using mock user data
  const fetchUserDetails = async () => {
    console.log("🚫 Backend fetch disabled. Using mock user.");

    // Mock user data for testing UI
    const mockUser = {
      _id: "123456",
      name: "Demo User",
      email: "demo@example.com",
      role: "user",
    };

    // Simulate successful login
    dispatch(loginRedux(mockUser));
  };

  useEffect(() => {
    // Load mock user details
    fetchUserDetails();
  }, []);

  useEffect(() => {
    const spinner = function () {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    spinner();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // mock fetch
      }}>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status" />
        </div>
        {/* Spinner End */}

        <Header />
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ width: 'auto', maxWidth: '500px' }}
        />
        <Outlet />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
