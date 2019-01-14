import React from 'react'
import { View, Button, Text } from 'react-native'

async function getPhotos() {
  try {
    let res = await fetch('http://jsonplaceholder.typicode.com/photos?_page=1&_limit=20')
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

class HomeScreen extends React.Component {
  state = {
    photos: []
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  async componentDidMount() {
    const json = await getPhotos()
    this.setState({photos: json})
  }

  render() {
    const { photos } = this.state
    console.log(photos)
    const { navigate } = this.props.navigation;

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
        {
          photos.map(photo => <Text>{photo.id}</Text>)
        }
      </View>
    );
  }
}

export default HomeScreen
