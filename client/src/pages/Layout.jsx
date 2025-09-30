import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { isSignedIn, isLoaded } = useUser();


  if (!isLoaded) return null; 

  return isSignedIn ? (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full px-8 min-h-14 flex justify-between items-center border-b border-gray-200 bg-white">
        <img
          src={assets.logo}
          alt="logo"
          className="w-44 sm:w-32 cursor-pointer"
          onClick={() => navigate("/")}
        />
        {/* Hamburger Icon for Mobile */}
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        {/* Main Content */}
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
