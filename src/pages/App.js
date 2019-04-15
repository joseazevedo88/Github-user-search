import SvgGinetta from "../elements/Svg/ginettaLogo";
import React, { useState } from "react";
import Box from "../elements/Box";
import Text, { H1 } from "../elements/TextStyles";
import fontSizes from "../materials/FontSizes";
import fontType from "../materials/FontType";
import Autocomplete from "../components/Autocomplete";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import materials from "../materials/";
require("dotenv").config();

const MainContainer = styled.div`
  background: ${props => props.theme.color.lightseagreen};
  height: 50vh;
  overflow: auto;
  position: relative;
  display: flex;
`;

const Navbar = styled.div`
  width: 100%;
  background: #00696b;
  height: 75px;
`;

const Container = styled.div`
  font-family: "verdana";
  width: 100%;
  height: 50vh;
  display: flex;
`;

const FirstSide = styled.div`
  height: 50vh;
  background-color: ${props => props.theme.color.secondary};
  width: 70%;
  padding: 3rem 3rem 0;
`;

const OtherSide = styled.div`
  height: 50vh;
  background-color: ${props => props.theme.color.primary};
  width: 30%;
  padding: 0 1rem;
`;

const FlexContainer = styled.div`
  height: 50vh;
  width: calc(100% / 3);
  padding: 0 2rem;
  position: relative;
`;

function App(props) {
  const [selected, setSelected] = useState("");

  const onClick = choice => {
    setSelected(choice);
  };

  return (
    <ThemeProvider theme={materials}>
      <div>
        <Navbar>
          <SvgGinetta />
        </Navbar>

        <Container>
          <FirstSide>
            <Autocomplete
              selected={selected}
              id="first"
              onClick={() => onClick("first")}
            />
          </FirstSide>
          <OtherSide>
            <Autocomplete
              small
              selected={selected}
              onClick={() => onClick("second")}
              id="second"
            />
          </OtherSide>
        </Container>

        <MainContainer>
          <FlexContainer>
            <Autocomplete
              small
              color="primary"
              selected={selected}
              onClick={() => onClick("third")}
              id="third"
            />
          </FlexContainer>
          <FlexContainer>
            <Autocomplete
              small
              color="secundary"
              onClick={() => onClick("fourth")}
              selected={selected}
              id="fourth"
            />
          </FlexContainer>
          <FlexContainer>
            <Autocomplete
              small
              color="error"
              onClick={() => onClick("fifth")}
              selected={selected}
              id="fifth"
            />
          </FlexContainer>
          <FlexContainer>
            <Text fontSize={fontSizes[8]} fontFamily={fontType[0]} color="">
              This is h1
            </Text>
            <Text fontSize={fontSizes[6]} fontFamily={fontType[1]}>
              This is h2
            </Text>
            <Text fontSize={fontSizes[5]} fontFamily={fontType[2]}>
              This is h3
            </Text>
            <Text fontSize={fontSizes[4]} fontFamily={fontType[3]}>
              This is p
            </Text>
            <H1>This is h1 again</H1>
          </FlexContainer>
          {/* <Box width={[1, 1 / 2]} p={4} bg="tomato">
              This is a tomato box, with responsive width, some padding, and
              margin bottom
            </Box> */}
          {/*<Box secundary>SOME CONTENT HERE</Box> */}
        </MainContainer>
      </div>
    </ThemeProvider>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: ""
//     };
//   }

//   onClick = choice => {
//     this.setState({
//       selected: choice
//     });
//   };

//   render() {
//     return (
//       <ThemeProvider theme={materials}>
//         <div>
//           <Navbar>
//             {/* <SvgName />
//             <SvgBody /> */}
//             <SvgGinetta />
//           </Navbar>

//           <Container>
//             <FirstSide>
//               <Autocomplete
//                 selected={this.state.selected}
//                 id="first"
//                 onClick={() => this.onClick("first")}
//               />
//             </FirstSide>
//             <OtherSide>
//               <Autocomplete
//                 small
//                 selected={this.state.selected}
//                 onClick={this.onClick.bind(this, "second")}
//                 id="second"
//               />
//             </OtherSide>
//           </Container>

//           <MainContainer>
//             <FlexContainer>
//               <Autocomplete
//                 small
//                 color="primary"
//                 selected={this.state.selected}
//                 onClick={this.onClick.bind(this, "third")}
//                 id="third"
//               />
//             </FlexContainer>
//             <FlexContainer>
//               <Autocomplete
//                 small
//                 color="secundary"
//                 onClick={this.onClick.bind(this, "fourth")}
//                 selected={this.state.selected}
//                 id="fourth"
//               />
//             </FlexContainer>
//             <FlexContainer>
//               <Autocomplete
//                 small
//                 color="error"
//                 onClick={this.onClick.bind(this, "fifth")}
//                 selected={this.state.selected}
//                 id="fifth"
//               />
//             </FlexContainer>
//             <FlexContainer>
//               <Text fontSize={fontSizes[8]} fontFamily={fontType[0]} color="">
//                 This is h1
//               </Text>
//               <Text fontSize={fontSizes[6]} fontFamily={fontType[1]}>
//                 This is h2
//               </Text>
//               <Text fontSize={fontSizes[5]} fontFamily={fontType[2]}>
//                 This is h3
//               </Text>
//               <Text fontSize={fontSizes[4]} fontFamily={fontType[3]}>
//                 This is p
//               </Text>
//               <H1>This is h1 again</H1>
//             </FlexContainer>
//             {/* <Box width={[1, 1 / 2]} p={4} bg="tomato">
//               This is a tomato box, with responsive width, some padding, and
//               margin bottom
//             </Box> */}
//             {/*<Box secundary>SOME CONTENT HERE</Box> */}
//           </MainContainer>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

export default App;
