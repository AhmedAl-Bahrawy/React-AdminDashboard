import React from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span className="o-highlight">o</span>ps
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className="menuItem" key={index}>
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <div>
            <UilSignOutAlt />
          </div>
          <span>Signout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
