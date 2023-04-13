import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import "./styles.css";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? "sidebar-wrap active" : "sidebar-wrap"}>
      <div className="menu-bars">
        <AiIcons.AiOutlineMenu onClick={showSidebar} />
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu inactive"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="nav-text">
            <a className="nav-link home" href="#welcome-section">
              <GrIcons.GrStatusInfo />
            </a>
          </li>
          <li className="nav-text">
            <a
              className="nav-link projects"
              href="#projects"
              style={{ color: "white" }}
            >
              <GrIcons.GrProjects />
            </a>
          </li>
          <li className="nav-text">
            <a className="nav-link contacts" href="#contacts">
              <MdIcons.MdOutlineContacts />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
