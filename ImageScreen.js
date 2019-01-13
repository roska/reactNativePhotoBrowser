
import React from 'react'
import { View, Button, Text } from 'react-native'

class ImageScreen extends React.Component {
  static navigationOptions = {
    title: 'ImageScreen',
  };

  render() {
    const { navigation } = this.props
    const {navigate} = this.props.navigation;

    const name = navigation.getParam('name', 'Default')
    return (
      <View>
        <Text>{name}</Text>
      </View>

    );
  }
}

export default ImageScreen
