import React from "react";

import "./theme.scss";

import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";


class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.body;
    console.log(this.body)
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: true,
    };
  }
    handleChange(value, event) {
        console.log(value);
        this.state.value ? this.body.classList.add('dark-mode') : this.body.classList.remove('dark-mode');
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
                className={this.state.value ? 'light-mode': 'dark-mode'}
                defaultValue={1}>
            <ToggleButton value={true}>Day</ToggleButton>
            <ToggleButton value={false}>Night</ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}
export default Theme;
