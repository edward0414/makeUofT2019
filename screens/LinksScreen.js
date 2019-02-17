import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList
} from "react-native";
import Touchable from "react-native-platform-touchable";
const Dimensions = require("Dimensions");
import { BlurView } from "react-native-blur";
let width = Dimensions.get("window").width;
import { activites } from "../data/activites";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Activites"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <FlatList
            data={activites}
            renderItem={({ item }) => (
              <Touchable
                background={Touchable.Ripple("#ccc", false)}
                onPress={item.handClick}
                style={styles.box}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.optionIconContainer}>
                    <Image
                      source={require("../assets/images/robot-dev.png")}
                      resizeMode="contain"
                      fadeDuration={0}
                      style={{ width: 20, height: 20, marginTop: 1 }}
                    />
                  </View>
                  <View style={styles.optionTextContainer}>
                    <Text style={styles.subTitle}>{item.label}:</Text>
                    <Text style={styles.optionText}>{item.subtext}</Text>
                  </View>
                </View>
              </Touchable>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    position: "absolute",
    height: 90,
    width: width
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  titleWrapper: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20
  },

  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "normal",
    textAlign: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  optionText: {
    fontSize: 20,
    marginTop: 1
  },
  box: {
    height: 75,
    borderColor: "#808080",
    borderBottomWidth: 2,
    justifyContent: "center"
  },
  optionsTitleText: {
    textAlign: "center",
    fontSize: 30,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
    borderColor: "#808080",
    borderBottomWidth: 2
  },
  optionIconContainer: {
    padding: 10
  },
  optionTextContainer: {
    flexDirection: "row",
    padding: 10
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10
  }
});
