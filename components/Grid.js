import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
  game: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    height: 4000
  },
  cell: {
    borderStyle: "solid",
    borderColor: "blueviolet",
    borderWidth: 1,
    borderRadius: 35,
    width: 15,
    height: 15
  },
  alive: {
    borderStyle: "solid",
    borderColor: "blueviolet",
    borderWidth: 1,
    width: 15,
    height: 15,
    backgroundColor: "greenyellow"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  board: {
    margin: "auto",
    marginTop: 75,
    marginBottom: -5
  },
  score: {
    textAlign: "center",
    color: "greenyellow",
    fontSize: 20,
    marginTop: 15
  }
});

export default ({ tower, score, handlePress }) => {
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={style.game}>
        <View style={style.board}>
          {tower.map((cells, i) => {
            return (
              <View style={style.row} key={i}>
                {cells.map((alive, i) => {
                  if (alive) {
                    return <View style={style.alive} key={i}></View>;
                  }
                  return <View style={style.cell} key={i}></View>;
                })}
              </View>
            );
          })}
        </View>
        <Text style={style.score}>Score: {score}</Text>
      </View>
    </TouchableHighlight>
  );
};
