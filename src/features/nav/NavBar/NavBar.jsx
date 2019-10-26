import React, { Component } from "react";
import { Menu, Button, Container } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="assets/logo_1.png" alt="logo" />
           Devmeet
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="center" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
