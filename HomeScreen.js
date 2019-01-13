import React from 'react'
import { View, Button } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="HomeScreen"
          onPress={() => navigate('Image', {name: 'Jane'})}
        />
        <Button
          title="HomeScreen 2."
          onPress={() => navigate('Image', {})}
        />
      </View>
    );
  }
}

export default HomeScreen
