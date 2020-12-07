import React, { Component } from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import Content from "./Content";

export default class Section extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Main />
          <Content />
        </div>
      </div>
    );
  }
}
