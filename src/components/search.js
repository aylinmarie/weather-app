import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Search extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form onSubmit = {this.props.loadWeather} >
        <FormGroup>
          <Input type="text" name="city" placeholder="City..." />
          <Input type="text" name="country" placeholder="Country..." />
          <Button>Get Weather</Button>
        </FormGroup>
      </Form>
    )
  }
}
export default Search;