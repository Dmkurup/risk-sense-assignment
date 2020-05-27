import React, { Fragment, Component } from "react";
import { Button , Badge} from "antd";
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
    console.log(skillSet);

    console.log("JOB", this.props.job);
    return (
      <React.Fragment>
        <h3>
          {title}{" "}
          <span>
          <Badge text={jobType.toLowerCase()} style={{ marginLeft: 12 }} />
            <Button type="primary" size="small">
              {jobType.toLowerCase()}
            </Button>
          </span>
        </h3>
        <div>{location}</div>
        <div>{desciption}</div>
        {skillSet.map((skill) => (
          <Button
            type="primary"
            size="small"
            style={{ marginRight: "4px", backgroundColor: "green",marginBottom: "4px"}}
          >
            {skill}
          </Button>
        ))}
      </React.Fragment>
    );
  }
}

export default Job;
