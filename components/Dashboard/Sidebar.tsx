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
  
  const handleNavigation = (component: string) => {
    console.log(`Switching to component: ${component}`);
    setActiveComponent(component);
  };

  return (
    <div
      className={`sidebar bg-violet-500 bg-opacity-80 shadow-lg shadow-violet-500 my-5 max-h-screen rounded-lg px-2 mr-3 ml-2 transition-all duration-500 ${
        isCollapsed ? "w-[60px]" : "w-[220px]"
      }`}
    >
      <div
        className="sidebartoggle flex justify-end my-4 mr-[5px] cursor-pointer"
        onClick={toggleSidebar}
      >
        <Menu size={32} color="#000000" />
      </div>
      <ul className="flex flex-col gap-3 justify-start items-start">
        <div
          className={`Sidebar-list flex flex-row items-center gap-2 w-full rounded-xl cursor-pointer transition-all duration-500 ${
            activeComponent === "Home" ? "bg-slate-50" : ""
          }`}
          onClick={() => handleNavigation("Home")}
        >
          <li>
            <House size={20} />
          </li>
          {!isCollapsed && <li>Home</li>}
        </div>
        <div
          className={`Sidebar-list flex flex-row items-center gap-2 w-full rounded-xl cursor-pointer transition-all duration-500 ${
            activeComponent === "Contact" ? "bg-slate-50" : ""
          }`}
          onClick={() => handleNavigation("Contact")}
        >
          <li>
            <ContactRound size={20} />
          </li>
          {!isCollapsed && <li>Contact Us</li>}
        </div>
        <div
          className={`Sidebar-list flex flex-row items-center gap-2 w-full rounded-xl cursor-pointer transition-all duration-500 ${
            activeComponent === "Gallery" ? "bg-slate-50" : ""
          }`}
          onClick={() => handleNavigation("Gallery")}
        >
          <li>
            <GalleryVerticalEnd size={20} />
          </li>
          {!isCollapsed && <li>Gallery</li>}
        </div>
        <div
          className={`Sidebar-list flex flex-row items-center gap-2 w-full rounded-xl cursor-pointer transition-all duration-500 ${
            activeComponent === "AboutUs" ? "bg-slate-100" : ""
          }`}
          onClick={() => handleNavigation("AboutUs")}
        >
          <li>
            <User size={20} />
          </li>
          {!isCollapsed && <li>About Us</li>}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;