"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Loader from "./Loader";
import "./heroSection.css";

export default function HeroSection() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const [refOne, inViewOne] = useInView({ threshold: 0.1 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.1 });
  const [refThree, inViewThree] = useInView({ threshold: 0.1 });

  const fadeOutLeft = {
    exit: { opacity: 0, x: -100 },
  };

  const fadeOutRight = {
    exit: { opacity: 0, x: 100 },
  };

  // State variables for loading, submission, and form errors
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setIsSubmitted(false);
    setMiniFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      budget: "",
    });
    setErrors({});
  };

  // Mini form state and handlers
  const [miniFormData, setMiniFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    budget: "",
  });

  const handleMiniFormChange = (e) => {
    setMiniFormData({ ...miniFormData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error message on input change
  };

  // Basic validation function
  const validateForm = () => {
    const newErrors = {};

    if (!miniFormData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!miniFormData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(miniFormData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!miniFormData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\+\d+\s*\d+$/.test(miniFormData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number with country code (e.g., +91 7218271556).";
    }

    if (!miniFormData.budget) {
      newErrors.budget = "Please select your budget.";
    }

    if (!miniFormData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleMiniFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return; // Do not submit if the form is invalid
    }

    setIsLoading(true);
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(miniFormData),
    });

    const data = await response.json();
    setIsLoading(false);

    // Construct the WhatsApp URL with encoded parameters
    const { name, budget, message } = miniFormData;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+918850283085&text=${encodeURIComponent(
      `Hello, My name is ${name}. I am interested in a project with a budget of ${budget}. Here are the details: ${message}`
    )}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset form after submission
    setMiniFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      budget: "",
    });
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="hero_coporate_agency" id="#home">
        <div className="container">
          <div className="content cstm_content_mob">
            <div className="section_title cstm_sect_title_mob">
              <motion.h1
                className="hero_title"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                Design<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Develop<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                Market<span style={{ color: "var(--red-dark-clr)" }}>.</span>{" "}
                <span style={{ color: "var(--green-dark-clr)" }}>
                  Rizz<span style={{ color: "var(--red-dark-clr)" }}>.</span>
                </span>
              </motion.h1>
              <motion.p
                className="wow fadeInLeft"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <b style={{ color: "var(--red-dark-clr)" }}>MetaRizz </b>
                helps you right from <b>Blockchain</b>, <b>AI</b>, <b>Web</b>,
                <b> Mobile App</b> to complete <b>infrastructure</b>{" "}
                development.
                <br />
                {" "}We design, develop, market to rizz up your digital presence.
              </motion.p>
              <motion.a
                href="https://calendly.com/alisolanki/hi"
                className="bg_btn"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                Contact Us <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
            </div>

            {/* Mini Form */}
            <div className="min_contact_area cstm_mini_form">
              <motion.div
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInRight}
                className="section_title"
                style={{ paddingBottom: "60px" }}
              >
                <h2>Let&apos;s work together</h2>
              </motion.div>

              {isLoading && <Loader />}
              {!isLoading && !isSubmitted && (
                <form onSubmit={handleMiniFormSubmit} className="contact_form_hero">
                  <div className="row">
                    <motion.input
                      type="text"
                      name="name"
                      value={miniFormData.name}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Your full name"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                    <motion.input
                      type="email"
                      name="email"
                      value={miniFormData.email}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Email address"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                    <motion.input
                      type="tel"
                      name="phoneNumber"
                      value={miniFormData.phoneNumber}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="(+91-) Phone Number"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                      pattern="^\+\d+\s*\d+$"
                      title="Please enter a valid phone number with country code e.g. +91 7218271556"
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                    <motion.select
                      name="budget"
                      value={miniFormData.budget}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      style={{ marginBottom: "10px" }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    >
                      <option value="">Choose your budget</option>
                      <option value="Below $1,000">Below $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </motion.select>
                    {errors.budget && <p className="error-message">{errors.budget}</p>}
                    <motion.textarea
                      name="message"
                      value={miniFormData.message}
                      onChange={handleMiniFormChange}
                      className="form-control input"
                      placeholder="Your message here..."
                      rows="5"
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.8, delay: 0.3 }}
                      variants={fadeInRight}
                    />
                    {errors.message && <p className="error-message">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    className="bg_btn"
                    variants={fadeInLeft}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                  >
                    Send Message <FontAwesomeIcon icon={faArrowRight} />
                  </motion.button>
                </form>
              )}

              {isSubmitted && (
                <div className="thank-you-message">
                  Thank you for submitting the form! We will get back to you soon.
                  <button onClick={resetForm}>Submit Another Form</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
