import Navbar from "../Header/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
