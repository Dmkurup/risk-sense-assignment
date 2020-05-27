import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <div >
        <div >Header Comp</div>
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    );
  }
}

export default PageHeader;
