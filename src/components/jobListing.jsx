import React, { Component } from "react";
import Job from "./job";
import FilterParams from "./filterParams";
import Pagination from "./pagination";
import axios from "axios";
import _ from "lodash";
import { paginate } from "./paginate";
import SearchBox from "./searchBox";

class JobListing extends Component {
  state = {
    jobs: [],
    pageSize: 4,
    currentPage: 1,
    selectedType: "",
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: jobs } = await axios.get(
      "http://localhost:9090/api/jobdescriptions"
    );
    this.setState({ jobs });
    console.log("DESC", jobs);
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, selectedType: "" });
  };

  render() {
    const {
      jobs: allJobs,
      selectedType,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;
    const filteredJobs = selectedType
      ? allJobs.filter((j) => j.jobType === selectedType)
      : allJobs;
    const jobs = paginate(filteredJobs, currentPage, pageSize);
    const totalCount = filteredJobs.length;
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <div className="row">
          <div className="col-3">
            <FilterParams />
          </div>
          <div className="col">
            <h6>RESULT</h6>
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
