import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { Constants } from "expo";
// import WelcomeScreen from "./screens/WelcomeScreen";

export default class App extends React.Component {
  // handleClick() {
  //   this.props.navigation.navigate('Details')}
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Smart Mitts</Text>
        <Text style={styles.explanation}>
          A innovative way in we approach working out
        </Text>
        <Text style={styles.empty} />
        <Button
          style={styles.button}
          //onPress={this.handleClick}
          onPress={() => this.props.navigation.navigate("Links")}
          title="Start"
          color="green"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    alignItems: "center"
  },
  header: {
    alignItems: "center",
    backgroundColor: "#f0ffff",
    fontSize: 50,
    padding: 20
  },
  explanation: {
    paddingTop: 35,
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center"
  },
  button: {
    padding: 35,
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "purple"
  },
  empty: {
    padding: 30
  }
});
