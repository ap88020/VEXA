import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOutIcon,
  PenBoxIcon,
  Scissors,
  User,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItmes = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: PenBoxIcon },
  { to: "/ai/blog-title", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: User },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <div
      className={`fixed sm:static top-14 bottom-0 left-0 z-20
                  bg-white border-r border-gray-200 flex flex-col
                  w-48 sm:w-56 lg:w-64
                  transform transition-transform duration-300 ease-in-out
                  ${
                    sidebar
                      ? "translate-x-0"
                      : "-translate-x-full sm:translate-x-0"
                  }`}
    >
      {/* User Info */}
      <div className="my-7 w-full text-center">
        <img
          src={user?.imageUrl}
          alt="user avatar"
          className="w-24 h-24 mx-auto rounded-full object-cover shadow"
        />
        <h1 className="mt-2 font-medium">{user?.fullName}</h1>
        <div className="px-4 text-sm font-medium text-gray-600">
          {navItmes.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#9234EA] to-[#473f4e] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} /> 
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full  border-t border-gray-300 px-4 py-2 items-center flex justify-between bottom-0 ">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={user.imageUrl} alt="" className="w-8 rounded-full" />
          <div>
            <h1 className="font-medium text-sm">{user.fullName}</h1>
            <p className="text-xs text-[#710080]">
              <Protect plan="premium">Premium </Protect>
              Plan
            </p>
          </div>
        </div>
        <LogOutIcon
          onClick={signOut}
          className="w-4 text-gray-400 hover:text-gray-700 transition-all cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Sidebar;
