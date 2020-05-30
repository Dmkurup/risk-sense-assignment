import React, {  Component } from "react";
class Job extends Component {
  state = {};
  render() {
    const {
      title,
      location,
      desciption,
      requiredSkills,
      jobType,
    } = this.props.job;
    const skillSet = requiredSkills.split(",");
    return (
      <div className="card" style={{ width: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span>
              <button
                className="btn btn-small btn-primary"
                style={{ borderRadius: "60px", padding: "2px 10px" }}
              >
                {jobType.toLowerCase()}
              </button>
            </span>
          </h5>
          <a href="#" className="card-link">
            <i className="fa fa-map-marker" aria-hidden="true">
              {location}
            </i>
          </a>

          <p className="card-text">{desciption}</p>
          {skillSet.map((skill, index) => (
            <button
              key={index}
              className="btn btn-small btn-light"
              style={{ borderRadius: "16px" }}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>      
    );
  }
}

export default Job;
