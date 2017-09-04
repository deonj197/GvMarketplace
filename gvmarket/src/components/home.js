import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './common/header';

class Home extends Component {
  render() {
    return (
      <View>
        <Header headerText="Home" />
        <Text>Home Page</Text>
      </View>
    )
  }
}

export default Home;