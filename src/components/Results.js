import React from "react";
import Result from "./Result";

export default function Results(props) {
  //const newResults = this.props.results.slice(0, 9);
  return props.results.map((result, index) => {
    return (
      <Result
        result={result}
        key={index}
        active={props.active}
        index={index}
        toggle={props.toggle}
        url={props.url}
        color={props.color}
      />
    );
  });
}
