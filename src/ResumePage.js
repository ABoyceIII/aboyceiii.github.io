import React from "react";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <div className="pdf-container">
        <iframe
          src="/assets/Allen_Boyce_Resume.pdf"
          title="Allen Boyce Resume"
          className="pdf-viewer"
        />
      </div>
    </div>
  );
};

export default ResumePage;
