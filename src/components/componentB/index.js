import React, { Component } from "react";
import "./componentB.css";

export default class ComponentB extends Component {
  render() {
    const id = "b";
    console.log(this.props);
    return (
      <div className={`component ${this.props.color}`}>
        <button
          className={`color-button`}
          onClick={() => this.props.setNewColor(this.props.color, id)}
        >
          Change Backgroundcolor
        </button>
        <span className={"component_title"}> Component B </span>
      </div>
    );
  }
}
