"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  return (
    <header className="navbar navbar-expand-md navbar-dark bg-light1 fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img
            src="/logo.png"
            alt="sudo-logo"
            className="d-inline-block align-top img-fluid"
            style={{ maxHeight: "35px", height: "auto", width: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link href="/" className="nav-link text-black" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-black" onClick={closeMenu}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/section" className="nav-link text-black" onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-black" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link text-black" onClick={closeMenu}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-black" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
