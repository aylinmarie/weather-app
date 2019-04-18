import React from "react";
import "./search.scss";

import { Button, Form, FormGroup } from "react-bootstrap";
import { Animated } from "react-animated-css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
    };
  }

  componentDidMount () {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(results => {
      return results.json();
    }).then(data => {
      let country = data.map((item) => {
        return( 
        <p>{item}</p>
      )
    })
    this.setState({country: country});
    })
  }
  
  render() {
    const createList = () => {
      let countryArray = [];
      for (let i = 0; i < this.state.country.length; i++) {
        countryArray.push(this.state.country[i].props.children.name);
      }
      return countryArray
    }
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
            </FormGroup>
            <Form.Control as="select" name="country">
              {createList().map(value => <option selected={value === "United States of America"} key={value}>{value}</option> )}
            </Form.Control>
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
