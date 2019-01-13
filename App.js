/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { Container, Header, Body, Title, Content, Card, CardItem } from 'native-base'
import { Col, Row, Grid  } from 'react-native-easy-grid'

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

function splitArrayToChunks(array, chunkSize) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
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
    const foo = splitArrayToChunks(photos, 3)
    console.log(foo)
    return (
      <Container>
        <Header>
          <Body>
            <Title>Foobar</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>Täsä ny o kontenttii</Text>

          <View style={styles.imageContainer}>
          {
            photos.map(photo => {
              return (
                <View style={styles.image}>
                  <Image
                    style={{height: 100, width: 100, borderRadius: 3}}
                    source={{uri: photo.thumbnailUrl}}
                  />
                </View>
              )
            })
          }
          </View>

        </Content>
      </Container>
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
  image: {
    // backgroundColor: 'cyan',
    padding: 5,
    // margin: 5,
    flexShrink: 1,
    width: '33%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});
