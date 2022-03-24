import React, { Component } from "react";
import "./componentA.css";

export default class ComponentA extends Component {
  render() {
    const id = "a";
    return (
      <div className={`component component-a  ${this.props.color}`}>
        <button
          className={`color-button rectangle`}
          onClick={() => this.props.setNewColor(this.props.color, id)}
        >
          Change Backgroundcolor
        </button>
        <span className={"component_title"}> Component A </span>
        <input
          className='rectangle input-text'
          type='text'
          placeholder='Enter Text'
          value={this.props.text}
          onChange={(e) => this.props.setNewText(e.target.value)}
        />
      </div>
    );
  }
}
