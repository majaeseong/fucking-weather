import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default class App extends Component {
  state = {
    isLoaded: false
  };
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
