import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./EnhancedHomePage.css";

const EnhancedHomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="home-container">
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-container">
          <motion.img
            src="/assets/temp-photo.png"
            alt="Allen Boyce"
            className="profile-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-container">
          <h1 className="main-heading">Hey! I'm Allen.</h1>
          <TypeAnimation
            sequence={[
              "Mobile Developer",
              2000,
              "Web Developer",
              2000,
              "Game Designer",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Performing Artist",
              2000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="typed-text"
          />
          <p className="description">
            Computer Science junior at LMU, specializing in mobile and web
            development. I combine analytical problem-solving with creative
            design to build intuitive, efficient applications.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/allen-boyce-iii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:your.allenboyceiii@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedHomePage;
