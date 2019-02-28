import React from 'react'
import { View, ScrollView, Button, Text, TouchableOpacity, Alert } from 'react-native'
import PhotoGrid from './components/PhotoGrid'
import api from './api'

class HomeScreen extends React.Component {
  state = {
    photos: []
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  async componentDidMount() {
    console.log('componen moutend')
    const json = await api.getPhotosPage(1, 20)
    this.setState({photos: json})
  }

  render() {
    const { photos } = this.state
    console.log(photos)
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <PhotoGrid navigate={navigate} />
        <TouchableOpacity onPress={() => Alert.alert('foooooo')}>
          <View>
            <Text>TTOOUUUUCCCHHHHH</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default HomeScreen
