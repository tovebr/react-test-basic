import React, { Component } from "react";
import "./componentA.css";

export default class ComponentA extends Component {
  render() {
    return (
      <div className={"component component-a"}>
        <span className={"component_title"}> Component A </span>
      </div>
    );
  }
}
