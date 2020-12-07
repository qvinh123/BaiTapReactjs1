import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div style={{height:"100px",background: "#333"}}>
          <p style={{ color: "white", textAlign: "center", lineHeight:"100px", margin:"0"}}>
            CopyRight @ Your Website 2020
          </p>
        </div>
      </div>
    );
  }
}
