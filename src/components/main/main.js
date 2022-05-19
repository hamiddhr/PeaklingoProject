import React from "react";
import { MainContainer } from "./Main.styled";

export default function Main({ children, ...restprops }) {
  return <MainContainer {...restprops}>{children}</MainContainer>;
}
