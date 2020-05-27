import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";
import PageFooter from './components/pageFooter';
import PageHeader from './components/pageHeader';
import SearchBar from './components/searchBar';
import JobListing from './components/jobListing';
import FilterParams from './components/filterParams';
import NewsFeed from './components/newsFeed';

class App extends Component {
  state = {
    data:[]
    }
  async componentDidMount() {
    const {data}=await axios.get("http://localhost:9090/api/jobdescriptions");
    this.setState({data});
    console.log("DESC",data);
  }
  render() { 
    return ( 
      <React.Fragment>
        <PageHeader/>
        <SearchBar/>
        <JobListing descriptions={this.state.data}/>
        <FilterParams/>
        <NewsFeed/>
        <PageFooter/>
      </React.Fragment>
  );
  }
}
 

export default App;
