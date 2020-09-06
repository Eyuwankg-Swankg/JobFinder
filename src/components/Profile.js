import React, { useState } from "react";
import user from "../img/user.png";
const Profile = () => {
  const [education, setEducation] = useState([""]);
  const [skills, setSkills] = useState([""]);
  const [experiences, setExperiences] = useState([""]);
  const [resume, setResume] = useState(null);

  const styleButton = {
    borderRadius: "25px",
    width: "10.5%",
    height: "30px",
    textAlign: "center",
    border: "none",
    marginRight: "10px",
    color: "snow",
    backgroundColor: "#117ADB",
  };
  return (
    <div id="profile-container">
      <h1>Profile</h1>
      <div id="profile-box">
        <div id="proile-img-container">
          <img src={user} />
        </div>
        <div id="profile-details-container">
          <div id="profile-details-sub">
            <div>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                // TODO: value onchange
                className="profile-class"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                // TODO: value onchange
                id="profile-email"
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                // TODO: value onchange
                className="profile-class"
              />
            </div>
            <div id="profile-details-sub-seconddiv">
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                // TODO: value onchange
                className="profile-class"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                // TODO: value onchange
                className="profile-class"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                // TODO: value onchange
                className="profile-class"
              />
            </div>
          </div>
          <div id="profile-extradetails-container">
            <div id="profile-education">
              <h5 className="profile-title-class">Education</h5>
              {education.map((item, index) => (
                <input
                  type="text"
                  name="name"
                  key={index}
                  class="profile-extradetails-input"
                  // TODO:value and onChange
                />
              ))}
              <h5
                onClick={() => setEducation([...education, ""])}
                style={{ cursor: "pointer" }}
              >
                + Add Education
              </h5>
            </div>
            <div id="profile-skills">
              <h5 className="profile-title-class">Skills</h5>
              {skills.map((item, index) => (
                <input
                  type="text"
                  name="name"
                  key={index}
                  class="profile-extradetails-input"
                  // TODO:value and onChange
                />
              ))}
              <h5
                onClick={() => setSkills([...skills, ""])}
                style={{ cursor: "pointer" }}
              >
                + Add Skill
              </h5>
            </div>
            <div id="profile-experience">
              <h5 className="profile-title-class">Experiences</h5>
              {experiences.map((item, index) => (
                <input
                  type="text"
                  name="name"
                  key={index}
                  class="profile-extradetails-input"
                  // TODO:value and onChange
                />
              ))}
              <h5
                onClick={() => setExperiences([...experiences, ""])}
                style={{ cursor: "pointer" }}
              >
                + Add Experience
              </h5>
            </div>
            <div id="profile-resume">
              <h5 className="profile-title-class">Resume</h5>
              <div id="profile-upload-resume">
                {resume ? resume : "+ Upload Your Resume"}
              </div>
            </div>
            <div
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingRight: "30px",
              }}
            >
              <button
                style={{
                  ...styleButton,
                  backgroundColor: "rgba(237, 30, 30, 0.8)",
                }}
                className="profile-end-buttons"
                // TODO: click value
              >
                Cancel
              </button>
              <button
                style={styleButton}
                className="profile-end-buttons"
                // TODO:click  value
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
