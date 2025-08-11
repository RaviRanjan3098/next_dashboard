import React, { useEffect, useState } from 'react';
import './sidebarCss.css';
import Link from 'next/link';
import { HiChevronDoubleRight } from "react-icons/hi";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggle = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      setIsToggled(!isToggled);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsToggled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });


  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
  const [active, setActive] = useState("1");

  const handleActive = (value) => {
    setActive(value);
  };

  console.log("active", active)

  return (
    <div className={`wrapper ${isToggled ? 'toggled' : ''}`} id="wrapper">
      {/* Sidebar */}
      <div className="sidebar-brand1 d-block d-md-none">
        <p href="#menu-toggle" id="menu-toggle" onClick={handleToggle}>
          <HiChevronDoubleRight />
        </p>
      </div>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li onClick={handleToggle}>
            <Link href="/section" className={`${active == 1 ? "active" : " "}`}><span onClick={() => handleActive(1)} >Section 1</span></Link>
          </li>

          <li onClick={handleToggle}>
            <Link href="/section2" className={`${active == 2 ? "active" : " "}`}><span onClick={() => handleActive(2)}>Section 2</span></Link>
          </li>

          {/* Nested Dropdown */}
          {/* <li className="nexted-sidebar-icon">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('section3')}>

              <span className=''>Child Section</span>
              </div>
            {activeDropdown === 'section3' && (
              <ul className="submenu">
                <li><a href="#">Sub Item 1</a></li>
                <li><a href="#">Sub Item 2</a></li>
              </ul>
            )}
          </li> */}

          <li onClick={handleToggle}>
            <Link href="/#" className={`${active == 3 ? "active" : " "}`}><span onClick={() => handleActive(3)}>Typography</span></Link>
          </li>

          <li onClick={handleToggle}>
            <Link href="/about" className={`${active == 4 ? "active" : " "}`}><span onClick={() => handleActive(4)}>About</span></Link>
          </li>

          <li onClick={handleToggle}>
            <Link href="/contact" className={`${active == 5 ? "active" : " "}`}><span onClick={() => handleActive(5)}>Contact</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
