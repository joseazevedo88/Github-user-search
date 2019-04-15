import React, { useState, useEffect } from "react";
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

function Autocomplete(props) {
  const [results, setResults] = useState(null);
  const [active, setActive] = useState(0);
  const [urls, setUrls] = useState([]);
  let resultTimer = null;

  const getUsers = inputString => {
    axios
      .get(
        `https://api.github.com/search/users?q=${inputString}&per_page=30&access_token=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res => setResults(res.data.items));
  };

  const onChange = event => {
    let value = event.target.value;
    clearTimeout(resultTimer);
    if (value.length === 0) {
      setResults(null);
    } else if (value.length > 0) {
      resultTimer = setTimeout(() => {
        getUsers(value);
      }, 150);
    }
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      window.location = urls[active];
    } else if (event.keyCode === 38 && active > 0) {
      setActive(active - 1);
    } else if (event.keyCode === 40 && active < 100) {
      setActive(active + 1);
    }
  };

  const setUrl = url => {
    setUrls([...urls, url]);
  };

  return (
    <SearchContainer small={props.small} onClick={props.onClick}>
      <Svg padding={props.padding} paddingSM={props.paddingSM} />
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        tabIndex={0}
        placeholder="Input text"
        display="block"
        m="auto"
        mr={0}
        p={0}
        width={1}
        height={56}
        fontSize={2}
        border={0}
        fontFamily="Arial"
      />
      {results && props.selected === props.id && (
        <UserResultStyle>
          <Results
            results={results}
            active={active}
            url={setUrl}
            color={props.color}
          />
        </UserResultStyle>
      )}
    </SearchContainer>
  );
}

export default Autocomplete;
