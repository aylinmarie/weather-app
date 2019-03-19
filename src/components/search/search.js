import React from 'react';
import './search.scss';

import { Button, Form, FormGroup, Dropdown } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { faRing } from '@fortawesome/pro-light-svg-icons';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.getCountries();
  }
  getCountries = async e => {
    const api_country = await fetch(`https://restcountries.eu/rest/v2/all`);
    const response_country = await api_country.json();

    for (let i = 0; i < response_country.length; i++) {
      const country = response_country[i].name;
      return country;
    }
  };
  render() {
    return (
      <div className="amd-search">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <Form onSubmit={this.props.loadWeather}>
            <FormGroup>
              <Form.Control
                className="amd-field-input"
                type="text"
                name="city"
                placeholder="city"
              />
              <Form.Control
                className="amd-field-input"
                type="text"
                name="country"
                placeholder="country"
              />
            </FormGroup>
            {/* <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>1</option>
              </Form.Control>
            </Form.Group> */}
            <Button type="submit" className="amd-search-button">
              Get Weather
            </Button>
          </Form>
        </Animated>
      </div>
    );
  }
}
export default Search;
