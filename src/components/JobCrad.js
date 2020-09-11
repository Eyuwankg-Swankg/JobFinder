import React,{useContext,useState} from "react";
import { Redirect } from "react-router-dom";
import Context from "../context/Context";
const JobCrad = ({ details, index }) => {
  const { setCurrentPostDetails } = useContext(Context);
  const [onClicked, setOnClicked] = useState(false);
  if (onClicked) return <Redirect to="/viewpost" />;
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
};

export default JobCrad;
