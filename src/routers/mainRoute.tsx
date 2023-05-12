import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Block/Footer";
import Layout from "../components/Block/Layout";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
