import React, { useState ,useContext } from "react";
import Context from "../context/Context"
import searchIcon from "../img/search.png";
import userIcon from "../img/user.png";
import chatIcon from "../img/comment.png";
import JobCard from "./JobCrad";
import { Redirect } from "react-router-dom";
const Post = () => {
  //Context
  const {user}=useContext(Context);
  //states
  const [query, setQuery] = useState("");
  const [jobPost, setJobPost] = useState([
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
    {
      title: "Marketing",
      name: "MangoDB",
      worktype: "remote",
      location: "chennai",
      duration: "full time",
      salary: "70,000",
    },
  ]);
  const [classes,setClasses]=useState("");
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  if (isChatClicked) return <Redirect to="/chat" />;
  if (isProfileClicked) return <Redirect to="/profile" />;
  return (
    <div id="post-container">
      <nav>
        <h1>Jobconnector</h1>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          id="home-search"
          // TODO: search accordingly
        />
        <img
          src={chatIcon}
          id="home-chat"
          onClick={() => {
            setIsChatClicked(true);
          }}
        />
        <img
          src={userIcon}
          id="home-user"
          onClick={() => setClasses(classes?"":"nav-dropout")}
        />
        <div className={classes}>
          <p
            onClick={() => {
              setIsProfileClicked(true);
            }}
          >
            Profile
          </p>
          <p>Logout</p>
        </div>
      </nav>
      <div id="post-main">
        <div id="post-filter">
          <h3>Filter</h3>
          <div>
            <h5>Category</h5>
            <input
              type="text"
              name="category"
              placeholder="Search Category"
              className="post-filters"
            />
          </div>
          <div>
            <h5>Work Type</h5>
            <input
              type="text"
              name="worktype"
              placeholder="Search Work type"
              className="post-filters"
            />
          </div>
          <div>
            <h5>Location</h5>
            <input
              type="text"
              name="location"
              placeholder="Search Location"
              className="post-filters"
            />
          </div>
          <div>
            <h5>Duration</h5>
            <input
              type="text"
              name="duration"
              placeholder="Search Duration"
              className="post-filters"
            />
          </div>
          <div>
            <h5>Expected Salary</h5>
            <input
              type="text"
              name="Salary"
              placeholder="Search Salary"
              className="post-filters"
            />
          </div>
        </div>
        <div id="post-jobs">
          {jobPost.map((item, index) => (
            <JobCard details={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
