import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Favorites from "../../pages/Favorites/Favorites";
import Login from "../../pages/Login/Login";

import Phone from "./../../pages/Phone/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/phones.json"),
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default router;
