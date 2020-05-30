import React, { Component } from "react";
import Select from "react-select";
import { Row, Col } from 'antd';
import Job from "./job";
import { Checkbox } from "antd";
import Pagination from "./pagination";
import axios from "axios";
import _ from "lodash";
import { paginate } from "./paginate";
import InputBox from "./input";
import { Input } from "antd";
const { Search } = Input;
const jobOptions = [
  { value: "full Time", label: "Full Time" },
  { value: "part Time", label: "Part Time" },
];

class JobListing extends Component {
  state = {
    jobs: [],
    data: {
      title: "",
      job_type: "",
      location: "",
      description: "",
    },
    pageSize: 4,
    currentPage: 1,
    selectedOption: null,
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
    console.log(input);
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({
      data,
      currentPage: 1,
    });
  };

  handleCheckBox = async({ target: input }) => {
    console.log(input, input.checked);
    const data = { ...this.state.data };
    data[input.name]=input.checked ? input.value:"";
    await this.setState({
      data,
      currentPage: 1,
    });
  };

  handleSelect = async (selectedOption, action) => {
    const data = { ...this.state.data };
    data[action.name] = selectedOption.value;
    const { data: jobs } = await axios.get(
      `http://localhost:9090/api/jobdescriptions/search?${action.name}=${selectedOption.value}`
    );
    await this.setState({
      data,
      currentPage: 1,
      selectedOption,
      jobs,
    });
  };

  handleSubmit = async (e) => {
    const { title, location, job_type, description } = this.state.data;
    e.preventDefault();
    const { data } = await axios.get(
      `http://localhost:9090/api/jobdescriptions/search?location=${location}&title=${title}&job_type=${job_type}&description=${description}`
    );
    this.setState({ jobs: data });
  };

  renderInput = (name, label, type = "text") => {
    const { data } = this.state;
    return (
      <InputBox
        name={name}
        label={label}
        type={type}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        value={data[name]}
      />
    );
  };

  renderSelect = (name, label, options, onSubmit) => {
    const { selectedOption } = this.state;
    return (
      <form className="form-group" onSubmit={onSubmit}>
        <label htmlFor={name}>{label}</label>
        <Select
          name={name}
          label={label}
          value={selectedOption}
          onChange={(ev, action) => this.handleSelect(ev, action)}
          options={options}
          placeHolder="Select a job type.."
        />
      </form>
    );
  };

  renderCheckBox = (name, value,label) => {
    const { selectedOption } = this.state;
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <Checkbox name={name} value={value} onChange={this.handleCheckBox}>
          {label}
        </Checkbox>
      </form>
    );
  };

  render() {
    const { jobs: allJobs, pageSize, currentPage, data } = this.state;
    const jobs = paginate(allJobs, currentPage, pageSize);
    const totalCount = allJobs.length;
    return (
      <React.Fragment>
         <Row>
        <Col span={16} offset={4}>
        <Search
          placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
          enterButton="Search"
          name="description"
          size="large"
          value={data.description}
          onChange={this.handleChange}
          onPressEnter={this.handleSubmit}
          style={{ marginBottom: "40px" }}
        />
        </Col>
        </Row>
          <Row>
          <Col span={4} offset={2}>
            <div>Filters</div>
            {this.renderSelect("job_type","Job Type",jobOptions,this.handleSubmit)}
            {this.renderInput("location", "Countries")}
            {this.renderInput("title", "Title")}
            {/* {this.renderCheckBox("job_type","full time","Full Time")}
            {this.renderCheckBox("job_type","part time","Part Time")}
            {this.renderCheckBox("job_type","hourly","Hourly")} */}
          </Col>
          <Col span={12} offset={1}>
            <h6 className="text-center">RESULT</h6>
            <ul>
              {jobs.map(job=> <Job key={job.id} job={job} />)}
            </ul>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </Col>
          </Row>
      </React.Fragment>
    );
  }
}

export default JobListing;
