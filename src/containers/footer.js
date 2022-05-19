import React from "react";

import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Merketing</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact us</Footer.Title>
            <Footer.Link href="#">Iran</Footer.Link>
            <Footer.Link href="#">United States</Footer.Link>
            <Footer.Link href="#">Qatar</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">Telegram</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
