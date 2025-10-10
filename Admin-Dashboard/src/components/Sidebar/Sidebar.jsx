import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const setActiveSelected = (index) => {
    setSelected(index);
  };

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
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setActiveSelected(index)}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div
          className={
            selected > SidebarData.length ? "menuItem active" : "menuItem"
          }
          onClick={() => setActiveSelected(SidebarData.length + 1)}
        >
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
