import React from "react";
import Job from "./Job";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchJob } from "../actions";
const JobsList = props => {
  console.log("jobslist", props);

  return (
    <div className="strap-card">
      <Button onClick={(e => e.preventDefault(), props.fetchJob)}>
        Get Jobs
      </Button>
      {props.jobs &&
        !props.isLoading &&
        props.jobs.map(job => {
          return <Job job={job} />;
        })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("initialState", state);
  return {
    isLoading: state.isLoading,
    jobs: state.jobs
  };
};
export default connect(mapStateToProps, { fetchJob })(JobsList);
