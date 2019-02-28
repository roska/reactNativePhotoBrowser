
import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import api from './api'

class ImageScreen extends React.Component {
  static navigationOptions = {
    title: 'ImageScreen',
  };

  state = {
    photo: null
  }

  // TODO: tää tulee varmaan received props tjt...
  // ei tarvikkaa, ku photo tulee propseina tietty nyt....
  // mobx/redux kanssa, hakee cachesta tai apista id.llä kuvan datan, jos sellasta ei ole
  async componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParam('id', null)
    console.log('!!!!!!!!!!!!!!!!!!!!!! id', id)
    const json = await api.getPhotoById(id)
    this.setState({photo: json})
  }

  render() {
    const { navigation } = this.props
    const { photo } = this.state
    const {navigate} = this.props.navigation;

    const name = navigation.getParam('name', 'Default')
    const id = navigation.getParam('id', null)
    return (
      <View> 
          <Text>{id}</Text>
          {
            photo ?
              <View>
                <Text>{photo.id}</Text>
                <Text>{photo.title}</Text>
              </View>
              : null
          }
      </View> 
    );
  }
}

const styles = StyleSheet.create({

})
export default ImageScreen
