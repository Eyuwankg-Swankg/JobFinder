import React, { useState, useContext } from "react";
import firebase from "firebase";
import Context from "../context/Context";
import { Redirect } from "react-router-dom";
const AddPost = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [organization, setOrganoization] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [duration, setDuration] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [addClicked, setAddClicked] = useState(false);
  const changeState = (arr, value, index) => {
    const a = [];
    for (let i = 0; i < index; i++) a.push(arr[i]);
    if (value !== "") a.push(value);
    for (let i = index + 1; i < arr.length; i++) a.push(arr[i]);
    return a;
  };
  if (addClicked) {
    const db = firebase.firestore();
    const email = user.Email;
    const id = email.substring(0, email.indexOf("@"));
    const name = user.FirstName + user.LastName;
    db.collection("posts").add({
      userName: name,
      userId: id,
      title,
      category,
      organization,
      workType,
      location,
      salary,
      duration,
      lastDate,
      requirements,
      specifications,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return <Redirect to="/post" />;
  }
  if (cancelClicked) return <Redirect to="/post" />;
  return (
    <div id="addpost-container">
      <div id="addpost-box">
        <div id="addpost-details-container">
          <div
            className="addpost-individual-container"
            id="addpost-title-container"
          >
            <h5>Post Title</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Post Title"
              className="addpost-details-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="addpost-category-container">
            <h5>Category</h5>
            <input
              type="text"
              name="title"
              placeholder="Category"
              className="addpost-details-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div
            id="addpost-organization-container"
            className="addpost-individual-container"
          >
            <h5>Organization Name</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Organization Name"
              className="addpost-details-input"
              value={organization}
              onChange={(e) => setOrganoization(e.target.value)}
            />
          </div>
          <div
            className="addpost-individual-container"
            id="addpost-worktype-container"
          >
            <h5>Work Type</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Work Type"
              className="addpost-details-input"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            />
          </div>
          <div className="addpost-individual-container">
            <h5>Location</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Location"
              className="addpost-details-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="addpost-individual-container">
            <h5>Salary</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Salary"
              className="addpost-details-input"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="addpost-individual-container">
            <h5>Duration</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Duration"
              className="addpost-details-input"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="addpost-individual-container">
            <h5>Last date for Applying</h5>
            <input
              type="text"
              name="title"
              placeholder="Enter Last date"
              className="addpost-details-input"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
            />
          </div>
        </div>
        <div id="addpost-details-bottom-container">
          <div id="addpost-req">
            <h5>Requirements</h5>
            {requirements.map((item, index) => (
              <input
                type="text"
                name="requirements"
                key={index}
                value={requirements[index]}
                onChange={(e) =>
                  setRequirements(
                    changeState(requirements, e.target.value, index)
                  )
                }
              />
            ))}
            <h6 onClick={() => setRequirements([...requirements, ""])}>
              +Add Requirements
            </h6>
          </div>
          <div id="addpost-spec">
            <h5>Other Specifications</h5>
            {specifications.map((item, index) => (
              <input
                type="text"
                name="specifications"
                key={index}
                value={specifications[index]}
                onChange={(e) =>
                  setSpecifications(
                    changeState(specifications, e.target.value, index)
                  )
                }
              />
            ))}
            <h6 onClick={() => setSpecifications([...specifications, ""])}>
              +Add Specifications
            </h6>
          </div>
        </div>
        <div id="addpost-buttons-container">
          <button
            style={{
              backgroundColor: "rgba(237, 30, 30, 0.8)",
            }}
            className="addpost-buttons"
            onClick={() => setCancelClicked(!cancelClicked)}
          >
            Cancel
          </button>
          <button
            className="addpost-buttons"
            onClick={() => setAddClicked(!addClicked)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
