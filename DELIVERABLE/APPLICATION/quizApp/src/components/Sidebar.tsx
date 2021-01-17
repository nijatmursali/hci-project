import React, { Component } from "react";
// import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Drawer,
  Left,
  Body,
  Title,
  Right,
} from "native-base";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Main</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button rounded>
            <Text>Primary</Text>
          </Button>
          <Text>Touch me</Text>
        </Content>
      </Container>
    );
  }
}
