import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skill = [
  {
    skill: "React",
    level: "beginner",
    color: "#ff3b00",
  },
  {
    skill: "web Design",
    level: "advance",
    color: "#6bdaf8",
  },
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "#e84f33",
  },
  {
    skill: "JavaScript",
    level: "advance",
    color: "#6bdaf8",
  },
  {
    skill: "LaTeX Programming",
    level: "advance",
    color: "#6bdaf8",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="logo192.png" alt="Logo" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1 className="data">Jonas Asare</h1>

      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook and eat, or to
        just enjoy the Ghana sun at the beach. Add me!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skill.map((list) => (
        <Skill
          skillName={list.skill}
          color={list.color}
          key={list.skill}
          emoji={list.level}
        />
      ))}
    </ul>

    // <div className="skill">
    //   <div className="skill-list">
    //     <Skill skillName="HTML + CSS💪" color="blue" />
    //     <Skill skillName="JavaScript💪" color="yellow" />
    //     <Skill skillName="Web Design💪" color="green" />
    //     <Skill skillName="Git and GitHub👍" color="red" />
    //     <Skill skillName="React💪" color="blue" />
    //     <Skill skillName="Svelte 😊" color="orangered" />
    //     {/*<p style={{ backgroundColor: "red" }}>Coding</p> */}
    //   </div>
    // </div>
  );
}

function Skill({ skillName, color, emoji }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {console.log(emoji)}
        {emoji === "advance" && "💪"}
        {emoji === "intermediate" && "👍"}
        {emoji === "beginner" && "👶"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
