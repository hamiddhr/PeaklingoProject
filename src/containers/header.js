import React from "react";

import Header from "../components/header";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Header.Link href="#">Logo</Header.Link>
      </Header.Wrapper>
    </Header>
  );
}
