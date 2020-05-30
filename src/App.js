import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import PageFooter from "./components/pageFooter";
import JobListing from "./components/jobListing";
import NavBar from "./components/navBar";
import NewsFeed from "./components/newsFeed";

class App extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout>
        <Header style={{ backgroundColor: "#777799" }} />
        <NavBar />
        <Layout>
          <Content>
            <JobListing />
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: "#777799" }}>
          <PageFooter />
        </Footer>
      </Layout>
    );
  }
}

export default App;

