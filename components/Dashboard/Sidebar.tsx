"use client";
import React, { useState } from "react";
import {
  ContactRound,
  GalleryVerticalEnd,
  House,
  Menu,
  User,
} from "lucide-react";

interface SidebarProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

function Sidebar({ activeComponent, setActiveComponent }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Function to handle component switching
  const handleNavigation = (component: string) => {
    console.log(`Switching to component: ${component}`);
    setActiveComponent(component);
  };

  return (
    <div
      className={`sidebar border border-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-[60px]" : "w-[250px]"
      }`}
    >
      <div
        className="sidebartoggle flex justify-end p-3 cursor-pointer"
        onClick={toggleSidebar}
      >
        <Menu size={32} />
      </div>

      <ul className="flex flex-col gap-5 mt-5 justify-start items-start px-3">
        <div
          className={`Sidebar-list flex flex-row items-center gap-3 w-full p-2 rounded cursor-pointer hover:bg-gray-100 ${
            activeComponent === "Home" ? "bg-slate-600" : ""
          }`}
          onClick={() => handleNavigation("Home")}
        >
          <li>
            <House size={24} />
          </li>
          {!isCollapsed && <li className="text-xl">Home</li>}
        </div>

        <div
          className={`Sidebar-list flex flex-row items-center gap-3 w-full p-2 rounded cursor-pointer hover:bg-gray-100 ${
            activeComponent === "Contact" ? "bg-slate-600" : ""
          }`}
          onClick={() => handleNavigation("Contact")}
        >
          <li>
            <ContactRound size={24} />
          </li>
          {!isCollapsed && <li className="text-xl">Contact Us</li>}
        </div>

        <div
          className={`Sidebar-list flex flex-row items-center gap-3 w-full p-2 rounded cursor-pointer hover:bg-gray-100 ${
            activeComponent === "Gallery" ? "bg-slate-600" : ""
          }`}
          onClick={() => handleNavigation("Gallery")}
        >
          <li>
            <GalleryVerticalEnd size={24} />
          </li>
          {!isCollapsed && <li className="text-xl">Gallery</li>}
        </div>

        <div
          className={`Sidebar-list flex flex-row items-center gap-3 w-full p-2 rounded cursor-pointer hover:bg-gray-100 ${
            activeComponent === "AboutUs" ? "bg-slate-600" : ""
          }`}
          onClick={() => handleNavigation("AboutUs")}
        >
          <li>
            <User size={24} />
          </li>
          {!isCollapsed && <li className="text-xl">About Us</li>}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
