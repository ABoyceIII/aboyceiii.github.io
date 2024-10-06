import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import EnhancedHomePage from "./EnhancedHomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<EnhancedHomePage></EnhancedHomePage>} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
