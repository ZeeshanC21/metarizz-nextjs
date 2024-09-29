"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./navbarItem";
import Link from 'next/link'
import "./header.css";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      {/* <!-- Header Section --> */}
      <header className="header_aria navbar_fixed">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="assets/img/logo/metarizz_logo.svg"
                alt=""
                className="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
            </button>
            <div
              className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav"> 
                <NavbarItem name="Home" active={false} onClick={handleNavCollapse} />
                <NavbarItem name="About Us" active={false} href="#digital-agency" onClick={handleNavCollapse}/>
                <NavbarItem name="Services" active={false} href="#our-services" onClick={handleNavCollapse}/>
                <NavbarItem name="Projects" active={false} href="#projects-section" onClick={handleNavCollapse}/>
                {/* <NavbarItem name="Blog" active={false} /> */}
              </ul>
              <div className="nav_buttons cstm_nav_buttons">
                <Link target="_blank" href="https://calendly.com/alisolanki/hi" className="contact_btn cstm_contact_btn_mob">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Header Section --> */}
    </>
  );
}
