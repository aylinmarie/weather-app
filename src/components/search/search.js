import React from 'react';
import './search.scss';

import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Animated } from "react-animated-css";

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
              <Input className="amd-field-input" type="text" name="city" placeholder="city" />
              <Input className="amd-field-input" type="text" name="country" placeholder="country" />
              <Button className="amd-search-button">Get Weather</Button>
            </FormGroup>
          </Form>
        </Animated>
      </div>
    )
  }
}
export default Search;