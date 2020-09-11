import React, { useState,useContext } from "react";
import back from "../img/back.png";
import Context from "../context/Context";
import { Redirect } from "react-router-dom";
const ViewPost = () => {
  const { currentPostDetails } = useContext(Context);
  const [backClicked, setBackClicked] = useState(false);
  if(backClicked) return <Redirect to="/post"/>
  if (currentPostDetails)
    return (
      <div id="addpost-container">
        <div id="addpost-box">
          <img src={back} style={{padding:"10px 0px 0px 20px",cursor:"pointer"}} onClick={()=>setBackClicked(!backClicked)} />
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
                value={currentPostDetails.title}
                disabled
              />
            </div>
            <div id="addpost-category-container">
              <h5>Category</h5>
              <input
                type="text"
                name="title"
                placeholder="Category"
                className="addpost-details-input"
                value={currentPostDetails.category}
                disabled
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
                value={currentPostDetails.organization}
                disabled
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
                value={currentPostDetails.workType}
                disabled
              />
            </div>
            <div className="addpost-individual-container">
              <h5>Location</h5>
              <input
                type="text"
                name="title"
                placeholder="Enter Location"
                className="addpost-details-input"
                value={currentPostDetails.location}
                disabled
              />
            </div>
            <div className="addpost-individual-container">
              <h5>Salary</h5>
              <input
                type="text"
                name="title"
                placeholder="Enter Salary"
                className="addpost-details-input"
                value={currentPostDetails.salary}
                disabled
              />
            </div>
            <div className="addpost-individual-container">
              <h5>Duration</h5>
              <input
                type="text"
                name="title"
                placeholder="Enter Duration"
                className="addpost-details-input"
                value={currentPostDetails.duration}
                disabled
              />
            </div>
            {currentPostDetails.lastDate !== "" ? (
              <div className="addpost-individual-container">
                <h5>Last date for Applying</h5>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Last date"
                  className="addpost-details-input"
                  value={currentPostDetails.lastDate}
                  disabled
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div id="addpost-details-bottom-container">
            {currentPostDetails.requirements > 0 ? (
              <div id="addpost-req">
                <h5>Requirements</h5>
                {currentPostDetails.requirements.map((item, index) => (
                  <input
                    type="text"
                    name="requirements"
                    key={index}
                    value={currentPostDetails.requirements[index]}
                    disabled
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
            {currentPostDetails.specifications > 0 ? (
              <div id="addpost-spec">
                <h5>Other Specifications</h5>
                {currentPostDetails.specifications.map((item, index) => (
                  <input
                    type="text"
                    name="specifications"
                    key={index}
                    value={currentPostDetails.specifications[index]}
                    disabled
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div id="addpost-buttons-container">
            <button className="addpost-buttons">Chat</button>
          </div>
        </div>
      </div>
    );
};

export default ViewPost;
