import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { withNavigation  } from 'react-navigation';


class TouchableImage extends React.Component {
  render() {
    const { photo } = this.props
    const { navigate } = this.props.navigation;

    return(
      <View>
        <TouchableHighlight
          onPress={() => navigate('Image', {id: photo.id})}
          style={styles.imageContainer}
        >
            <Text
            >Foobar {photo.id}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
  },
  imageContainer: {
    // width: '33%',
    padding: 15,
    minHeight: 15
  },
})

export default withNavigation(TouchableImage)
