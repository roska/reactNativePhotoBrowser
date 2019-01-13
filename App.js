/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

async function getPhotos() {
  try {
    let res = await fetch('http://jsonplaceholder.typicode.com/photos?_page=1&_limit=20')
    if (!res.ok) throw Error(res.statusText)
    return res.json()

  } catch(error) {
    console.log(error)
  }
}

type Props = {};
export default class App extends Component<Props> {

  state = {
    photos: []
  }

  async componentDidMount() {
    const json = await getPhotos()
    this.setState({photos: json})
  }

  render() {
    const { photos } = this.state
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View style={styles.imageContainer}>
        {
          photos.map(photo => {
            return (
              <View style={styles.image}>
                <Text>{photo.id}</Text>
                  <Image
                    style={{height: 100, width: 100, borderRadius: 3}}
                    source={{uri: photo.thumbnailUrl}}
                  />
                </View>
              )
            })
          }
          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 25,
    marginBottom: 25,
    padding: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    // backgroundColor: 'cyan',
    padding: 10,
    // margin: 5,
    flexShrink: 1,
    width: '33%',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
