import React, { Component } from "react";
import "./componentB.css";

export default class ComponentB extends Component {
  render() {
    return (
      <div className={"component component-b"}>
        <span className={"component-b_title"}> Component B </span>
      </div>
    );
  }
}
