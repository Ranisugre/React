import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import "../index.css";
// import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Error from "./Error";
import Restaurantinfo from "./Restaurantinfo";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "../utils/appStore";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./About"));
const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div id="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading---</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantinfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
