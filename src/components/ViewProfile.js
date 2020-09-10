import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import back from "../img/back.png";
import Context from "../context/Context";
import { Redirect } from "react-router-dom";
const ViewProfile = () => {
  const { currentChatUserDetails } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [education, setEducation] = useState(null);
  const [skills, setSkills] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [resume, setResume] = useState(null);
  const [isBackClicked, setIsBackClicked] = useState(false);
  useEffect(() => {
    setFirstName(currentChatUserDetails.FirstName);
    setLastName(currentChatUserDetails.LastName);
    setEmail(currentChatUserDetails.Email);
    setNumber(currentChatUserDetails.Number);
    setGender(currentChatUserDetails.Gender);
    setCity(currentChatUserDetails.City);
    setEducation(currentChatUserDetails.Education);
    setSkills(currentChatUserDetails.Skills);
    setExperiences(currentChatUserDetails.Experience);
    console.log(currentChatUserDetails);
  }, []);
  if (isBackClicked) return <Redirect to="/chat" />;
  return (
    <div id="profile-container">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1>{currentChatUserDetails.FirstName}'s Profile</h1>
      <div id="profile-box">
        <img
          src={back}
          style={{ paddingLeft: "20px", cursor: "pointer" }}
          onClick={() => setIsBackClicked(!isBackClicked)}
        />
        <div id="profile-details-container">
          <div id="profile-details-sub">
            <div>
              {firstName ? (
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="profile-first-name"
                  className="profile-class"
                  disabled
                />
              ) : (
                <></>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                id="profile-email"
                className="profile-class"
                disabled
              />
              {number ? (
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="profile-class"
                  disabled
                />
              ) : (
                <></>
              )}
            </div>
            <div id="profile-details-sub-seconddiv">
              {lastName ? (
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="profile-class"
                  disabled
                />
              ) : (
                <></>
              )}
              {gender ? (
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="profile-class"
                  disabled
                />
              ) : (
                <></>
              )}
              {city ? (
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="profile-class"
                  disabled
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div id="profile-extradetails-container">
            {education && education.length > 0 ? (
              <div id="profile-education">
                <h5 className="profile-title-class">Education</h5>
                {education.map((item, index) => (
                  <input
                    type="text"
                    name="name"
                    key={index}
                    class="profile-extradetails-input"
                    value={education[index]}
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
            {skills && skills.length > 0 ? (
              <div id="profile-skills">
                <h5 className="profile-title-class">Skills</h5>
                {skills.map((item, index) => (
                  <input
                    type="text"
                    name="name"
                    key={index}
                    class="profile-extradetails-input"
                    value={skills[index]}
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
            {experiences && experiences.length > 0 ? (
              <div id="profile-experience">
                <h5 className="profile-title-class">Experiences</h5>
                {experiences.map((item, index) => (
                  <input
                    type="text"
                    name="name"
                    key={index}
                    class="profile-extradetails-input"
                    value={experiences[index]}
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
