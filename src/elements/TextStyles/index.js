import styled, { css } from "styled-components";
import { fontSize, fontFamily, color } from "styled-system";
import fontSizes from "../../materials/FontSizes";

export const H1 = styled.p`
  font-size: ${fontSizes[8]}px;
`;

export default (Text = styled.p`
  ${fontSize}
  ${fontFamily}
  ${color}
`);

// // with a `theme.shadows` array
// const App = props => (
//   <Text fontSize={3}>
//     Hello
//   </Text>
// )
