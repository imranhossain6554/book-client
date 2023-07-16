import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetails from "../page/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/book-details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
