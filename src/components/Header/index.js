import React from "react";
import Wrapper, { Brand } from "./styles";

export default class Header extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Brand>tripshock</Brand>
      </Wrapper>
    );
  }
}
