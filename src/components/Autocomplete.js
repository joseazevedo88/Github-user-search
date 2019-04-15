import React, { Component } from "react";
import Svg from "../elements/Svg";
import Input from "../elements/Input";
import styled from "styled-components";
import Results from "../components/Results";
import axios from "axios";

const SearchContainer = styled.div`
  padding-top: 5rem;
  z-index: 1;
  width: 100%;
  max-width: ${props => (props.small ? "300px" : "500px")};
  position: relative;
  margin: auto;

  &:focus-within {
    svg {
      fill: #00696b;
    }
  }
`;

const UserResultStyle = styled.div`
  max-height: 15rem;
  overflow: auto;
  width: 100%;
  margin: 10px auto 0;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12),
    0px 0px 2px rgba(0, 0, 0, 0.14);
  @media (max-height: 900px) {
    max-height: 7rem;
  }
`;

const Card = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`;

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      active: 0,
      urls: [],
      isFocused: false,
      selected: "first"
    };
    this.results = null;
  }

  getUsers = inputString => {
    axios
      .get(
        `https://api.github.com/search/users?q=${inputString}&per_page=30&access_token=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res =>
        this.setState({
          results: res.data.items
        })
      );
  };

  onChange = event => {
    let value = event.target.value;
    clearTimeout(this.results);
    if (value.length === 0) {
      this.setState({
        results: null
      });
    } else if (value.length > 0) {
      this.results = setTimeout(() => {
        this.getUsers(value);
      }, 150);
    }
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      window.location = this.state.urls[this.state.active];
    } else if (event.keyCode === 38 && this.state.active > 0) {
      this.setState(prevState => ({
        active: prevState.active - 1
      }));
    } else if (event.keyCode === 40 && this.state.active < 100) {
      this.setState(prevState => ({
        active: prevState.active + 1
      }));
      // } else if (event.keyCode === 27) {
      //   this.setState({
      //     results: null
      //   });
    }
  };

  onFocus = () => {
    this.setState(prevState => ({
      isFocused: !prevState.isFocused
    }));
  };

  onBlur = () => {
    this.setState(prevState => ({
      isFocused: !prevState.isFocused
    }));
  };

  setUrl = url => {
    this.setState(prevState => ({
      urls: [...prevState.urls, url]
    }));
  };

  render() {
    return (
      <SearchContainer small={this.props.small} onClick={this.props.onClick}>
        <Svg padding={this.props.padding} paddingSM={this.props.paddingSM} />
        <Input
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          tabIndex={0}
          placeholder="Input text"
          display="block"
          m="auto"
          width={1}
          height={56}
          fontSize={2}
          border={0}
          fontFamily="Arial"
        />
        {/* {this.state.results && this.state.results.length === 0 && (
                  <div>No results matching</div>
                )} */}
        {this.state.results && this.props.selected === this.props.id && (
          <UserResultStyle>
            <Results
              results={this.state.results}
              active={this.state.active}
              url={this.setUrl}
              color={this.props.color}
            />
          </UserResultStyle>
        )}
      </SearchContainer>
    );
  }
}

export default Autocomplete;
