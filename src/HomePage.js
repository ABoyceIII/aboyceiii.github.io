import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

// const Header = () => (
//   <header className="header">
//     <nav>
//       <ul className="nav-list">
//         <li>
//           <a href="#about" className="nav-link">
//             About Me
//           </a>
//         </li>
//         <li>
//           <a href="#projects" className="nav-link">
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#resume" className="nav-link">
//             Resume
//           </a>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <main className="main-content">
        <div className="container">
          <motion.div
            className="image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/assets/temp-photo.png"
              alt="Allen Boyce"
              className="profile-image"
            />
          </motion.div>
          <motion.div
            className="text-container"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.h1 className="heading" variants={textVariants}>
              Hey! I'm Allen.
            </motion.h1>
            <motion.p
              className="description"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              I'm a Junior majoring in Computer Science at Loyola Marymount
              University. I specialize in mobile and web app development.
            </motion.p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
