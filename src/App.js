import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import PageFooter from "./components/pageFooter";
import JobListing from "./components/jobListing";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    const { Footer } = Layout;
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <JobListing />
        </main>
        <Footer style={{ backgroundColor: "#777799" }}>
          <PageFooter />
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;
