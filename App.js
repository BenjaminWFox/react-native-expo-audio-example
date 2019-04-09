import React from 'react';
import AudioPlayer from './AudioPlayer'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super() 

    this.audioPlayer = new AudioPlayer()

    this.state = {
      ready: false,
    }
  }

  componentDidMount = async () => {
    await this.audioPlayer.init()
    this.setState({ready: true})
  }

  handlePlaySound = () => {
    this.audioPlayer.playSound()
  }

  render() {
    const { ready } = this.state

    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={{
          width: '75%',
          height: '75%',
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disabled={!ready}
        onPress={this.handlePlaySound}>
          <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 40}}>Play Sound</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
