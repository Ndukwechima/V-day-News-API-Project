import React, { Component } from "react";

import { countries } from "../countries";
import Search from "../SearchBar/Search.component";

import "../Buttons/Buttons.css";

class Button extends Component {
  render() {
    return (
      <div className="btn-categories">
        <div className='button_list'>
          <select
            value={this.props.newValue}
            name="Category"
            onChange={this.props.handleChange}
            className="category"
          >
            <option >Categories</option>
            <option>Business </option>
            <option> Sports </option>
            <option> Polities </option>
          </select>

          <select
            value={this.props.value}
            name="value"
            onChange={this.props.handleChange}
            className="country"
          >
            <option>Countries</option>
            {countries.map((country, index) => (
              <option
                key={index}
                value={country}
                style={{ color: "darkblue", backgroundColor: "white" }}
              >
                {country}
              </option>
            ))}
          </select>
          <button className="top-stories">Top Stories</button>
          <button className="current-news">Current News</button>
          {/* <button className="old-news">Old News</button> */}
        </div>
        <div style={{ marginLeft: "auto", marginRight: "10px" }}>
          <Search searchValue={this.props.searchValue} />
        </div>
      </div>
    );
  }
}

export default Button;
