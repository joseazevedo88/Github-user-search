import React, { useEffect } from "react";
import Image from "../elements/Image";
import Link from "../elements/Link";
import styled from "styled-components";
import SvgHeart from "../elements/Svg/svgHeart";
import { colorStyle } from "styled-system";

const UserContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.highlight ? "white !important" : "none !important"};
  ${colorStyle};
`;

const UserStyle = styled.p`
  position: relative;
  margin-left: 1rem;
  padding-top: 0.5rem;
  color: ${props => (props.highlight ? "black" : "white")};
`;

const ImageContainer = styled.div`
  padding: 10px 10px 5px 10px;
`;

const UserHandler = styled.div`
  width: 100%;
  border-bottom: ${props => (props.highlight ? "none" : "1px solid #e8e8e8;")};
`;

export default function Result(props) {
  useEffect(() => {
    props.url(props.result.html_url);
  }, []);

  const { avatar_url, login } = props.result;

  return (
    <Link onClick={props.toggle}>
      <UserContainer
        colors={props.color}
        highlight={props.active === props.index}
      >
        <ImageContainer>
          <Image
            src={avatar_url}
            borderRadius={50}
            maxHeight={50}
            maxWidth={50}
          />
        </ImageContainer>
        <UserHandler highlight={props.active === props.index}>
          <UserStyle highlight={props.active === props.index}>
            {login}
            <SvgHeart />
          </UserStyle>
        </UserHandler>
      </UserContainer>
    </Link>
  );
}
