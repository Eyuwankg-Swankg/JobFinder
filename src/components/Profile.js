import React, { useState, useContext, useEffect } from "react";
import {Helmet} from "react-helmet"
import userIcon from "../img/user.png";
import back from "../img/back.png";
import Context from "../context/Context";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
const Profile = () => {
  //Context
  const { user, setUser } = useContext(Context);
  //states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [resume, setResume] = useState(null);
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const [save, setSave] = useState(false);
  //changeValue in array State
  function changeState(arr, index, value) {
    var a = [];
    for (let i = 0; i < index; i++) a.push(arr[i]);
    if (value !== "") a.push(value);
    for (let i = index + 1; i < arr.length; i++) a.push(arr[i]);
    return a;
  }
  //set Current Uset values
  useEffect(() => {
    if (user) {
      setFirstName(user.FirstName);
      setLastName(user.LastName);
      setEmail(user.Email);
      setNumber(user.Number);
      setGender(user.Gender);
      setCity(user.City);
      setEducation(user.Education);
      setSkills(user.Skills);
      setExperiences(user.Experience);
    }
  }, [user]);

  //firebase
  var db = firebase.firestore();
  if (save) {
    const userId = user.Email;
    const id = userId.substring(0, userId.indexOf("@"));
    db.collection("users").doc(id).update(user);
    setSave(false);
    setIsCancelClicked(!isCancelClicked);
  }
  //update values
  const updateValue = () => {
    setUser({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Number: number,
      Gender: gender,
      City: city,
      Education: education,
      Skills: skills,
      Experience: experiences,
    });
    setSave(true);
  };
  if (isCancelClicked) return <Redirect to="/post" />;
  return (
    <div id="profile-container">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1>Profile</h1>
      <div id="profile-box">
        <img
          src={back}
          style={{ paddingLeft: "20px", cursor: "pointer" }}
          onClick={() => setIsCancelClicked(!isCancelClicked)}
        />
        <div id="proile-img-container">
          <img src={userIcon} />
        </div>
        <div id="profile-details-container">
          <div id="profile-details-sub">
            <div>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="profile-first-name"
                className="profile-class"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                id="profile-email"
                className="profile-class"
                disabled
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="profile-class"
              />
            </div>
            <div id="profile-details-sub-seconddiv">
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="profile-class"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="profile-class"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                  value={education[index]}
                  onChange={(e) => {
                    setEducation(changeState(education, index, e.target.value));
                  }}
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
                  value={skills[index]}
                  onChange={(e) => {
                    setSkills(changeState(skills, index, e.target.value));
                  }}
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
                  value={experiences[index]}
                  onChange={(e) => {
                    setExperiences(
                      changeState(experiences, index, e.target.value)
                    );
                  }}
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
            <div id="profile-buttons-section">
              <button
                style={{
                  backgroundColor: "rgba(237, 30, 30, 0.8)",
                }}
                className="profile-end-buttons"
                onClick={() => setIsCancelClicked(!isCancelClicked)}
              >
                Cancel
              </button>
              <button
                className="profile-end-buttons"
                onClick={() => updateValue()}
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
