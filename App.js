import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class PizaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPressButton() {
    Alert.alert('You pressed the button!');
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={styles.textContainer} >
          <TextInput
            style={{ height: 40, color: 'black' }}
            placeholderTextColor='black'
            placeholder="Type here to translate"
            onChangeText={(text) => this.setState({ text })} />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View style={styles.alternativeLayoutButtonContainer} >
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 40,
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    flex: 2,
    backgroundColor: 'steelblue',
    padding: 40,

    justifyContent: 'center'
  }
})