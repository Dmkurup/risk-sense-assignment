import React, { Component } from "react";
import { Layout } from "antd";

import "./App.css";
import PageFooter from "./components/pageFooter";
import PageHeader from "./components/pageHeader";
import SearchBar from "./components/searchBar";
import SearchBox from "./components/searchBox";
import JobListing from "./components/jobListing";
import FilterParams from "./components/filterParams";
import NewsFeed from "./components/newsFeed";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <JobListing />
        </main>
        <Footer style={{backgroundColor:"#777799"}}><PageFooter/></Footer>
      </React.Fragment>

      //      <Layout>
      //     {/* <Header style={{backgroundColor:"white"}}><PageHeader/></Header> */}
      //     <Header style={{backgroundColor:"white"}}><NavBar/></Header>
      //     

      //   <div className="row">
      //   <div className="col">
      //   <FilterParams />
      //   </div>
      //   <div className="col-5">
      //   <JobListing />
      //   </div>
      //   <div className="col">
      //   <NewsFeed/>
      //   </div>
      // </div>
      // <Footer><PageFooter/></Footer>
      // </Layout>

      // <Layout>
      //   {/* <Header style={{backgroundColor:"white"}}><PageHeader/></Header> */}
      //   <Header style={{backgroundColor:"white"}}><NavBar/></Header>
      //   <SearchBar/>
      //   <Layout>
      //   <Sider style={{backgroundColor:"white"}}><FilterParams/></Sider>
      //   <Content><JobListing descriptions={this.state.data}/></Content>
      //   <Sider style={{backgroundColor:"white"}}><NewsFeed/></Sider>
      //   </Layout>
      //   <Footer><PageFooter/></Footer>
      // </Layout>
    );
  }
}

export default App;
