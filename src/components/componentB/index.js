import React, { Component } from "react";
import "./componentB.css";

export default class ComponentB extends Component {
  render() {
    const id = "b";
    return (
      <div className={`component component-b ${this.props.color}`}>
        <button
          className={`color-button rectangle`}
          onClick={() => this.props.setNewColor(this.props.color, id)}
        >
          Change Backgroundcolor
        </button>
        <span className={"component_title"}> Component B </span>
        <p className='rectangle text-output'>{this.props.text}</p>
      </div>
    );
  }
}
