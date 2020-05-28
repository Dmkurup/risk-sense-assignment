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
//search?job_type=Full%20Time&location=Bangalore"
//`http://localhost:9090/api/jobdescriptions/search?${queryName}=${queryVal}`

  handleChange = ({ currentTarget: input }) => {
    const job = { ...this.state.data };
    job[input.name] = input.value;

    this.setState({ data: job, queryName: input.name, queryVal: input.value });

  };

  handleSubmit = async (e) => {
    const {title,location,jobType} = this.state.data;
    //let { queryName, queryVal } = this.state;
   // queryName = queryName === "jobType" ? "job_type" : queryName;
    e.preventDefault();

    const { data } = await axios.get(
      `http://localhost:9090/api/jobdescriptions/search?location=${location}&title=${title}&job_type=${jobType}`
    );

    this.setState({ jobs: data });
  };

  render() {
    const { jobs: allJobs, pageSize, currentPage } = this.state;
    const jobs = paginate(allJobs, currentPage, pageSize);
    const totalCount = allJobs.length;
    const displayMsg = totalCount===0? "There are no matching results in the database":`Showing ${totalCount} results from the data base`;
   
    return (
      <React.Fragment>
        {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
        
        <p>{displayMsg}</p>
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
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                value={this.state.data.title}
                onChange={this.handleChange}
                id="title"
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
