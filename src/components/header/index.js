import React from "react";

import { Container, Wrapper, Link } from "./styles/header";

export default function Header({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restprops }) {
  return <Wrapper {...restprops}>{children}</Wrapper>;
};

Header.Link = function HeaderLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};
