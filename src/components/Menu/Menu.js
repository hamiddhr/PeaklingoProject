import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
