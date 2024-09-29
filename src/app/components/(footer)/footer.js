"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="footer">
        <div className="container">
          <div className="main_footer cstm_main_footer_mob">
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="site_info logo_area">
                  <img
                    src="assets/img/logo/metarizz_logo.svg"
                    alt=""
                    className="footer_logo custom_footer_logo"
                  />
                  <p>
                    We are focused on providing the best digital services to our
                    clients. Contact us for more information.
                  </p>
                  <div className="social_icons cstm_social_icons_414px">
                    <a href="https://twitter.com/alisolankii">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://www.instagram.com/meta.rizz/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com/in/alisolanki">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mid">
                <div className="site_info">
                  <h5>Contact info</h5>
                  <ul className="loc_list list-unstyled">
                    <li>Mumbai, Bengaluru, Ahmedabad</li>
                    <li>India</li>
                  </ul>
                  <ul className="contact_list list-unstyled">
                    <li className="mail">
                      <a href="mailto:inquire@metarizz.com">
                        inquire@metarizz.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:44793123456">+91 88502 83085</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 last">
                <div className="site_info">
                  {/* <h5>Subscribe newsletter</h5> */}
                  {/* <form action="#contact-section" className="subscribe_form"> */}
                  {/* <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    /> */}
                  <button className="bg_btn_color" value="Contact Us">
                    <Link
                      target="_blank"
                      className="cstm footer_contact_button"
                      href="https://wa.link/uapt4q"
                    >
                      Contact us
                    </Link>
                  </button>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_list">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="footer_nav list-unstyled">
                    <li>
                      <a href="#projects-section">Portfolio</a>
                    </li>
                    <li>
                      <a href="#digital-agency">Our Team</a>
                    </li>
                    <li>
                      <a href="#contact-section">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="#our-services">Services</a>
                    </li>
                    <li>
                      <a href="https://calendly.com/alisolanki/hi">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="footer_nav right list-unstyled">
                    <li>
                      <a href="#digital-agency">Terms & conditions</a>
                    </li>
                    <li>
                      <a href="#digital-agency">privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_copyright">
              <p>© 2023 MetaRizz</p>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <img src="assets/img/footer/1.png" alt="" className="one" />
            <img src="assets/img/footer/2.png" alt="" className="two " />
            <img src="assets/img/footer/3.png" alt="" className="three" />
          </motion.div>
        </div>
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
