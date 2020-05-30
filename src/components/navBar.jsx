import React from "react";
import { Avatar } from "antd";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <Row className="navbar navbar-expand-lg navbar-light bg-light">
      <Col span={4} offset={2}>
        <div className="navbar-brand">HUBSTAFF TALENT</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </Col>
      <Col span={12} offset={4}>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              HOW IT WORKS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle active"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              BROWSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item nav-link active">SEARCH</a>
          </li>
          <li className="nav-item">
            <a className="nav-item  dropdown-toggle nav-link active">
              My Account
            </a>
          </li>
          <li className="nav-item">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default NavBar;
