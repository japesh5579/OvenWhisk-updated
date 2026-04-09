import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'

import Login from '../pages/Login'

import ContactUs from '../pages/ContactUs'
import Feature from '../pages/Feature'
import Services from '../pages/Services'
import Testimonial from '../pages/Testimonial'

import Team from '../pages/Team'
import Signup from '../pages/Signup'
// import Cart from '../pages/Cart'
// import DairyProducts from '../pages/DairyProducts'
// import OrganicProducts from '../pages/OrganicProducts'
import Products from '../pages/Products'
// import Checkout from '../pages/Checkout'
// import OrderPlaced from '../pages/OrderPlaced'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "login",
                element: <Login />
            }
            ,
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "feature",
                element: <Feature />
            },
            {
                path: "services",
                element: <Services />
            },
            // ,
            {
                path: "test",
                element: <Testimonial />
            },
            {
                path: "products",
                element: <Products />
            },
            // {
            //     path: "gallery",
            //     element: <Gallery/>
            // },
            {
                path: "team",
                element: <Team/>
            },
            // {
            //     path: "signup",
            //     element: <Signup/>
            // },
            // {
            //     path: "cart",
            //     element: <Cart/>
            // },
            // {
            //     path: 'dairyproducts',
            //     element: <DairyProducts/>
            // },
            // {
            //     path: 'organicproducts',
            //     element: <OrganicProducts/>
            // },
            // {
            //     path: 'checkout',
            //     element: <Checkout/>
            // },
            // {
            //     path: 'order-placed',
            //     element: <OrderPlaced/>
            // },
            // {
            //     path : "all-users",
            //     element : <AllUsers/>
            // },
            // {
            //     path : "all-orders",
            //     element : <AllOrders/>
            // }

        ]
    }
])


export default router