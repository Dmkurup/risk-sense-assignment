import React, { Component } from "react";
import Job from "./job";
import Filter from "./filter";
import Pagination from "./pagination";
import axios from "axios";
import _ from "lodash";
import { paginate } from "./paginate";
// import SearchBox from "./searchBox";

class JobListing extends Component {
  state = {
    jobs: [],
    data: {
      title: "",
      jobType: "",
      location: "",
    },
    pageSize: 4,
    currentPage: 1,
    queryName: "",
    queryVal: "",
  };

  async componentDidMount() {
    const { data: jobs } = await axios.get(
      "http://localhost:9090/api/jobdescriptions"
    );
    this.setState({ jobs });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };


  handleChange = ({ currentTarget: input }) => {
    const job = { ...this.state.data };
    job[input.name] = input.value;

    this.setState({ data: job, queryName: input.name, queryVal: input.value });
    console.log("HANDLECHNGE", input.value);
  };

  handleSubmit = async (e) => {
    let { queryName, queryVal } = this.state;
    queryName = queryName === "jobType" ? "job_type" : queryName;
    e.preventDefault();

    const { data } = await axios.get(
      `http://localhost:9090/api/jobdescriptions/search?${queryName}=${queryVal}`
    );

    this.setState({ jobs: data });
  };

  render() {
    const { jobs: allJobs, pageSize, currentPage } = this.state;
    const jobs = paginate(allJobs, currentPage, pageSize);
    const totalCount = allJobs.length;

    return (
      <React.Fragment>
        {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
        <div className="row">
          <div className="col-3">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label htmlFor="jobType">Job Type</label>
              <input
                name="jobType"
                value={this.state.data.jobType}
                onChange={this.handleChange}
                id="jobType"
                type="text"
                className="form-control"
              />
            </form>
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label htmlFor="location">Location</label>
              <input
                name="location"
                value={this.state.data.location}
                onChange={this.handleChange}
                id="location"
                type="text"
                className="form-control"
              />
            </form>
          </div>
          <div className="col">
            <h6 className="text-center">RESULT</h6>
            <ul>
              {jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </ul>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobListing;
