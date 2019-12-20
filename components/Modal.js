import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";

const style = StyleSheet.create({
  background: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    height: 4000
  },
  modal: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    height: 400,
    width: 300,
    marginBottom: -5,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "greenyellow",
    borderRadius: 0.1
  },
  title: {
    color: "greenyellow",
    fontSize: 30,
    marginTop: 3
  },
  score: {
    fontSize: 20,
    color: "red"
  },
  legend: {
    color: "greenyellow",
    marginBottom: 3
  },
  img: {
    height: 300,
    width: 125
  }
});

export default ({ message, handlePress, score }) => {
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={style.background}>
        <View style={style.modal}>
          <Text style={style.title}>TowerJS</Text>
          {message === "Tap to start!" ? null : (
            <Text style={style.score}>Your score: {score} Floor:</Text>
          )}
          <Image style={style.img} source={require("./tower.png")} />
          <Text style={style.legend}>{message}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
