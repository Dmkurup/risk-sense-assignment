import React, {  Component } from "react";
// import { Button, Badge } from "antd";
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
      //   <React.Fragment>
      //     <h3>
      //       {title}{" "}
      //       <span>
      //         <Button type="primary" size="small">
      //           {jobType.toLowerCase()}
      //         </Button>
      //       </span>
      //     </h3>
      //     <svg
      //       class="bi bi-geo-alt"
      //       width="1em"
      //       height="1em"
      //       viewBox="0 0 16 16"
      //       fill="red"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fill-rule="evenodd"
      //         d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      //       />
      //     </svg>
      //     <div>{location}</div>
      //     <div>{desciption}</div>
      //     {skillSet.map((skill) => (
      //       <Button
      //         type="primary"
      //         size="small"
      //         style={{
      //           marginRight: "4px",
      //           backgroundColor: "green",
      //           marginBottom: "4px",
      //         }}
      //       >
      //         {skill}
      //       </Button>
      //     ))}
      //   </React.Fragment>
    );
  }
}

export default Job;
