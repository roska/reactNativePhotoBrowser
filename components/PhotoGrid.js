import React from 'react'
import { Text, Button, Alert, View, StyleSheet, TouchableOpacity } from 'react-native'
import TouchableImage from './TouchableImage'
import api from '../api'

export default class PhotoGrid extends React.Component {
  state = {
    photos: []
  }

  async componentDidMount() {
    const json = await api.getPhotosPage(1, 20)
    this.setState({photos: json})
  }

  render() {
    const { photos } = this.state
    const { navigate } = this.props

    return (
      <View style={styles.photogrid}>
        {
           photos.map(photo => <TouchableImage photo={photo} navigate={navigate} key={`photo-${photo.id}`} />) 
        }
        <TouchableOpacity onPress={() => Alert.alert('foooooo')}>
          <View>
            <Text>fooo</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  photogrid: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // color: 'blue',
    // alignItems: 'flex-start',
    // backgroundColor: '#333'

  }
})
