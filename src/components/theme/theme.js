import React from "react";

import "./theme.scss";

import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";


class Theme extends React.Component {
    constructor(props) {
        super(props);
        document.documentElement.setAttribute("data-theme", "light");
        this.toggleTheme = this.toggleTheme.bind(this);        
        this.state = {
            value: true,
            theme: 'light'
        };
    }
    toggleTheme(value, event) {
        this.setState({ value });
        let theme = value ? 'light' : 'dark';
        this.setState({ theme })
        document.documentElement.setAttribute("data-theme", theme);
    }
  
  render() {
    return (
      <div className="amd-theme-toggle">
        <ButtonToolbar>
            <ToggleButtonGroup 
                type="radio" 
                name="options" 
                value={this.state.value}
                onChange={this.toggleTheme}
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
