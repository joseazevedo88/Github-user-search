import styled from "styled-components";
import {
  display,
  space,
  color,
  width,
  height,
  fontSize,
  border,
  fontFamily
} from "styled-system";

const Input = styled.input`
  text-indent: 1.9rem;
  :focus {
    outline-style: hidden;
    outline-color: #00696b;
    outline-width: 2px;
  }
  ${display}
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${border}
  ${fontFamily}

  
`;

export default Input;
