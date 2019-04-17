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
        <p>{item.name}</p>
      )
    })
    this.setState({country: country});
    console.log("country", this.state.country);
    })
  }

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
            </FormGroup>
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
