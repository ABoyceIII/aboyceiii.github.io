import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">About Me</h1>

      <section className="about-section">
        <h2 className="section-title">Who I Am</h2>
        <p>
          I'm a junior Computer Science major at Loyola Marymount University,
          passionate about mobile and web app development. Born and raised in
          Silicon Valley, I've been coding since I was 10 years old, thanks to
          my dad's early introduction to programming.
        </p>
        <p>
          Beyond coding, I have a creative side that extends to writing comic
          books, making music, and photography. I also discovered a love for
          theater in high school, which I've continued to pursue in college.
        </p>
      </section>

      <section className="about-section skills-section">
        <h2 className="section-title">My Skills</h2>
        <ul className="skills-list">
          <li>Mobile Development</li>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Problem Solving</li>
          <li>Public Speaking</li>
          <li>Creative Writing</li>
        </ul>
      </section>

      <section className="about-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>Loyola Marymount University</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Expected Graduation: 2026</p>
          <p>Current Status: Undergraduate Junior</p>
        </div>
        <div className="education-item">
          <h3>The Harker School, San Jose</h3>
          <p>High School Diploma</p>
          <p>Graduated: 2022</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
