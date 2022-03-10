import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable, Image, TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from "react-navigation";


export default class PendingAppealsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };

  }
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Pending Appeals</Text>
          <Text style={styles.text}>{this.props.filmName}</Text>
          <Text style={styles.text}>{this.props.ownerName}</Text>
        </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d9fe0',
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'System',
    color: '#966464',
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: 'rgba(0,0,255,0.58)',
    backgroundColor: 'transparent',
  },
  logo: {
    width: '100%',
    height: '20%',
  },
});
