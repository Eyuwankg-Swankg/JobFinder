import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import Context from "../context/Context";
import searchIcon from "../img/search.png";
import userIcon from "../img/user.png";
import chatIcon from "../img/comment.png";
import AddPostIcon from "../img/add.png";
import JobCard from "./JobCrad";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
const Post = () => {
  //Context
  const { user } = useContext(Context);
  //states
  const [query, setQuery] = useState("");
  const [jobPost, setJobPost] = useState([]);
  const [classes, setClasses] = useState("");
  const [firebaseData, setFirebaseData] = useState(null);
  const [category, setCategory] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [workTypeList, setWorkTypeList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [durationList, setDurationList] = useState([]);
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    var arr = [];
    const db = firebase.firestore();
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setFirebaseData(snapshot.docs);
      });
  }, []);
  useEffect(() => {
    if (firebaseData) {
      var a = [];
      for (let i of firebaseData) a.push(i.data());
      setJobPost(a);
    }
  }, [firebaseData]);
  useEffect(() => {
    if (jobPost) {
      var a = [],
        b = [],
        c = [],
        d = [];
      jobPost.map((item, index) => {
        if (a.indexOf(item.category) == -1 && item.category !== "")
          a.push(item.category);
        if (b.indexOf(item.workType) === -1 && item.workType !== "")
          b.push(item.workType);
        if (c.indexOf(item.location) === -1 && item.location !== "")
          c.push(item.location);
        if (d.indexOf(item.duration) === -1 && item.duration !== "")
          d.push(durationList, item.duration);
      });
      setCategoryList(a);
      setWorkTypeList(b);
      setLocationList(c);
      setDurationList(d);
    }
  }, [jobPost]);
  function updateState(arr, value) {
    var a = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) a.push(arr[i]);
    a.push(value);
    return a;
  }
  if (isChatClicked) return <Redirect to="/chat" />;
  if (isProfileClicked) return <Redirect to="/profile" />;
  if (logout) return <Redirect to="/" />;
  if (addPost) return <Redirect to="/addpost" />;
  return (
    <div id="post-container">
      <Helmet>
        <title>Post</title>
      </Helmet>
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
          src={user ? (user.dp ? JSON.parse(user.dp) : userIcon) : userIcon}
          id="home-user"
          onClick={() => setClasses(classes ? "" : "nav-dropout")}
        />
        <div className={classes}>
          <p
            onClick={() => {
              setIsProfileClicked(true);
            }}
          >
            Profile
          </p>
          <p onClick={() => setLogout(!logout)} style={{ cursor: "pointer" }}>
            Logout
          </p>
        </div>
      </nav>
      <div id="post-main">
        <div id="post-filter">
          <h3>Filter</h3>
          <div className="post-parent">
            <h5>Category</h5>
            <input
              type="text"
              name="category"
              placeholder="Search Category"
              className="post-filters"
              value={category}
              disabled
            />
            <div className="post-list">
              {categoryList ? (
                categoryList.map((item, index) => (
                  <h6 key={index} onClick={() => setCategory(item)}>
                    {item}
                  </h6>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="post-parent">
            <h5>Work Type</h5>
            <input
              type="text"
              name="worktype"
              placeholder="Search Work type"
              className="post-filters"
              value={workType}
              disabled
            />
            <div className="post-list">
              {workTypeList ? (
                workTypeList.map((item, index) => (
                  <h6 key={index} onClick={() => setWorkType(item)}>
                    {item}
                  </h6>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="post-parent">
            <h5>Location</h5>
            <input
              type="text"
              name="location"
              placeholder="Search Location"
              className="post-filters"
              value={location}
              disabled
            />
            <div className="post-list">
              {locationList ? (
                locationList.map((item, index) => (
                  <h6 key={index} onClick={() => setLocation(item)}>
                    {item}
                  </h6>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="post-parent">
            <div className="post-list" style={{top:"-150px"}}>
              {durationList ? (
                durationList.map((item, index) => (
                  <h6 key={index} onClick={() => setDuration(item)}>
                    {item}
                  </h6>
                ))
              ) : (
                <></>
              )}
            </div>
            <h5>Duration</h5>
            <input
              type="text"
              name="duration"
              placeholder="Search Duration"
              className="post-filters"
              value={duration}
              disabled
            />
          </div>
          <div>
            <h5>Expected Salary</h5>
            <input
              type="number"
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
        <img
          src={AddPostIcon}
          id="post-add"
          onClick={() => setAddPost(!addPost)}
        />
      </div>
    </div>
  );
};

export default Post;
