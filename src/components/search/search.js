import React from 'react';
import './search.scss';

import { Button, Form, FormGroup, Input } from 'reactstrap';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="amd-search">
        <Form onSubmit = {this.props.loadWeather} >
          <FormGroup>
            <Input className="amd-field-input" type="text" name="city" placeholder="city" />
            <Input className="amd-field-input" type="text" name="country" placeholder="country" />
            <Button className="amd-search-button">Get Weather</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
export default Search;