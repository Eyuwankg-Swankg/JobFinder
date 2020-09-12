import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Context from "../context/Context";
const JobCrad = ({
  details,
  index,
  category,
  workType,
  location,
  duration,
  salary,
  search,
}) => {
  const { setCurrentPostDetails } = useContext(Context);
  const [onClicked, setOnClicked] = useState(false);
  if (onClicked) return <Redirect to="/viewpost" />;
  if (search) {
    const searchStr = search.toLowerCase();
    const originalTitle = details.title.toLowerCase();
    if (originalTitle.includes(searchStr)) {
      return (
        <div
          key={index}
          id="job-card"
          onClick={() => {
            setCurrentPostDetails(details);
            setOnClicked(!onClicked);
          }}
        >
          <h5>{details.title}</h5>
          <h6>{details.organization}</h6>
          <h6>{details.workType}</h6>
          <h6>{details.duration}</h6>
          <h6>{details.salary}</h6>
        </div>
      );
    } else return <></>;
  }
  var count = 0,
    param = 0;
  if (category && category !== "Select Category") {
    param += 1;
    if (details.category === category) count += 1;
  }
  if (workType && workType !== "Select WorkType") {
    param += 1;
    if (details.workType === workType) count += 1;
  }
  if (location && location !== "Select Location") {
    param += 1;
    if (details.location === location) count += 1;
  }
  if (duration && duration !== "Select Duration") {
    param += 1;
    if (details.duration === duration) count += 1;
  }
  if (details.salary >= salary) {
    param += 1;
    count += 1;
  }
  if (count >= param) {
    return (
      <div
        key={index}
        id="job-card"
        onClick={() => {
          setCurrentPostDetails(details);
          setOnClicked(!onClicked);
        }}
      >
        <h5>{details.title}</h5>
        <h6>{details.organization}</h6>
        <h6>{details.workType}</h6>
        <h6>{details.duration}</h6>
        <h6>{details.salary}</h6>
      </div>
    );
  } else return <></>;
};

export default JobCrad;
