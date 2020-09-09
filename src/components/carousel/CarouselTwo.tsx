import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import CarousleItem from "../carouselItem/CarousleItem";

export default () => (
  <Swiper
    style={styles.wrapper}
    dot={
      <View
        style={{
          backgroundColor: "rgba(255,255,255,.3)",
          width: 10,
          height: 10,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7,
        }}
      />
    }
    activeDot={
      <View
        style={{
          backgroundColor: "#fff",
          width: 7,
          height: 7,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7,
        }}
      />
    }
    paginationStyle={{
      position: "absolute",
      top: 0,
    }}
    loop={true}
  >
    <CarousleItem />
    <CarousleItem />
    <CarousleItem />
    <CarousleItem />
  </Swiper>
);

var styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
