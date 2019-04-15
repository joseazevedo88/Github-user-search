import React, { Component } from "react";
import Image from "../elements/Image";
import Link from "../elements/Link";
import styled from "styled-components";
import SvgHeart from "../elements/Svg/svgHeart";
import { colorStyle } from "styled-system";

const UserContainer = styled.div`
  display: flex;
  background-color: ${props =>
      props.highlight ? "white !important" : "none !important"}
    ${colorStyle};
`;

const UserStyle = styled.p`
  position: relative;
  margin-left: 1rem;
  padding-top: 0.5rem;
  color: ${props => (props.highlight ? "grey" : "white")};
`;

const ImageContainer = styled.div`
  padding: 10px 10px 5px 10px;
`;

const UserHandler = styled.div`
  width: 100%;
  border-bottom: ${props => (props.highlight ? "none" : "1px solid #e8e8e8;")};
`;

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  componentDidMount() {
    this.props.url(this.props.result.html_url);
  }

  render() {
    console.log(this.props.color);
    const { avatar_url, login } = this.props.result;
    //const githubUrl = `https://www.github.com/${login}`;
    return (
      <Link onClick={this.props.toggle}>
        <UserContainer
          colors={this.props.color}
          highlight={this.props.active === this.props.index}
        >
          <ImageContainer>
            <Image
              src={avatar_url}
              borderRadius={50}
              maxHeight={50}
              maxWidth={50}
            />
          </ImageContainer>
          <UserHandler highlight={this.props.active === this.props.index}>
            <UserStyle highlight={this.props.active === this.props.index}>
              {login}
              <SvgHeart />
            </UserStyle>
          </UserHandler>
        </UserContainer>
      </Link>
    );
  }
}

export default Result;
