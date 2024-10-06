import React from "react";
import "./ProjectsPage.css";

// Import your SVG icons here
import ReactIcon from "./icons/react-icon.svg";
import JavaScriptIcon from "./icons/javascript-icon.svg";
import PythonIcon from "./icons/python-icon.svg";
import FirebaseIcon from "./icons/firebase-icon.svg";
import PhaserIcon from "./icons/phaser-icon.svg";
import OpenCVIcon from "./icons/opencv-icon.svg";
import CSSIcon from "./icons/css-icon.svg";

const skillIcons = {
  React: ReactIcon,
  JavaScript: JavaScriptIcon,
  Python: PythonIcon,
  Firebase: FirebaseIcon,
  Phaser: PhaserIcon,
  OpenCV: OpenCVIcon,
  CSS: CSSIcon,
  // Add more mappings as needed
};

const projects = [
  {
    name: "Project BitRrush",
    description:
      "A top-down RPG-style rogue-lite web game developed using the Phaser3 engine. Features procedural level generation and character progression systems.",
    images: [], // Empty array for no images
    skills: ["JavaScript", "React", "Phaser"],
  },
  {
    name: "Coven",
    description:
      "A full-stack mobile and web application for household management. Built with React and Firebase, featuring an intuitive UI/UX and secure user authentication.",
    // No images property for this project
    skills: ["React", "Firebase", "CSS"],
  },
  {
    name: "LiveShot",
    description:
      "A real-time camera switching system using OpenCV and Python. Integrates facial recognition algorithms for dynamic camera angle selection in live events.",
    images: [], // Empty array for no images
    skills: ["Python", "OpenCV"],
  },
];

const SkillIcon = ({ skill }) => {
  const IconComponent = skillIcons[skill];
  return IconComponent ? (
    <img src={IconComponent} alt={skill} className="skill-icon" />
  ) : null;
};

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-header">
      <h2 className="project-title">{project.name}</h2>
      <div className="project-skills">
        {project.skills.map((skill, index) => (
          <SkillIcon key={index} skill={skill} />
        ))}
      </div>
    </div>
    <div className="project-content">
      {project.images && project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.name} thumbnail ${index + 1}`}
            />
          ))}
        </div>
      )}
      <div className="project-info">
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
