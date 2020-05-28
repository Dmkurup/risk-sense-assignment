// import React, { Component } from "react";
// import axios from 'axios';

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         title: "",
//         jobType: "",
//         location: "",
//       },
//       jobType:[]
//     };
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     //call server
//     const queryParam=this.state.data.jobType;
//     const {data}= await axios.get("http://localhost:9090/api/jobdescriptions/search?job_type="+queryParam);
//     )
//   };


//   handleChange = ({ currentTarget: input }) => {
//     const data = { ...this.state.data };
//     data[input.name] = input.value;

//     this.setState({ data});

//     console.log("DATA",this.state.data)
//   };

//   render() {
//     const { data } = this.state;
//     return (
//     <form className="form-group" onSubmit={this.handleSubmit}>
//         <label htmlFor="jobType">Job Type</label>
//         <input
//           value={data.jobType}
//           name="jobType"
//           onChange={this.handleChange}
//           id="jobType"
//           type="text"
//           className="form-control"
//         />
//       </form>
//     );
//   }
// }

// export default Filter;
