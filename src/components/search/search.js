import React from 'react';
import './search.scss';

import { Button, Form, FormGroup, Dropdown } from 'react-bootstrap';
import { Animated } from "react-animated-css";
import { faRing } from '@fortawesome/pro-light-svg-icons';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <div className="amd-search">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <Form onSubmit = {this.props.loadWeather} >
            <FormGroup>
              <Form.Control className="amd-field-input" type="text" name="city" placeholder="city" />
              <Form.Control className="amd-field-input" type="text" name="country" placeholder="country" />
              <Button type="submit" className="amd-search-button">Get Weather</Button>
            </FormGroup>
          </Form>
        </Animated>
      </div>
    )
  }
}
export default Search;