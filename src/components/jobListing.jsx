import React, { Component } from "react";
import Job from "./job";

class JobListing extends Component {
  state = {};
  render() {
    const { descriptions } = this.props;
    return (
      <div>
        <h3>Job List</h3>
        <ul>
          {descriptions.map((job) => (
            <Job job={job} />
          ))}
        </ul>
      </div>
    );
  }
}

export default JobListing;
