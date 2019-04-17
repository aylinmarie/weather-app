import React from "react";
import "./theme.scss";

import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";


class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: [1],
    };
  }
  handleChange(value, event) {
    this.setState({ value });
  }
  
  render() {
    return (
      <div className="amd-theme-toggle">
        <ButtonToolbar>
            <ToggleButtonGroup 
                type="radio" 
                name="options" 
                value={this.state.value}
                onChange={this.handleChange}
                defaultValue={1}>
            <ToggleButton value={1}>Day</ToggleButton>
            <ToggleButton value={2}>Night</ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}
export default Theme;
