import React, { useState } from "react";
import searchIcon from "../img/search.png";
import userIcon from "../img/user.png";
import chatIcon from "../img/comment.png";
import JobCard from "./JobCrad";
const Post = () => {
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
        <img src={searchIcon} id="home-search" />
        <img src={chatIcon} id="home-chat" />
        <img src={userIcon} id="home-user" />
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
