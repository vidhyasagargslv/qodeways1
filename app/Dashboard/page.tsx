"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Home from "@/components/Dashboard/Home";
import Contact from "@/components/Dashboard/Contact";
import Gallery from "@/components/Dashboard/Gallery";
import AboutUs from "@/components/Dashboard/AboutUs";

const Dashboard = () => {
  const pathname = usePathname();
  // State to track which component to show
  const [activeComponent, setActiveComponent] = useState<string>("Home");

  //   useEffect(() => {
  //     const path = pathname?.split('/').pop();
  //     if (path) {
  //       setActiveComponent(path);
  //     } else {
  //       setActiveComponent("Home");
  //     }
  //   }, [pathname]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Contact":
        return <Contact />;
      case "Gallery":
        return <Gallery />;
      case "AboutUs":
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard-container flex max-h-screen bg-[#2e1866]">
      {/* Sidebar */}
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      {/* Main Content */}
      <div className="main-content flex-1 p-5 overflow-y-auto">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
