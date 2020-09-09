import React, { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import CarousleItem from "../carouselItem/CarousleItem";

const data = [1, 2, 3, 4];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => {
          return <CarousleItem />;
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "35%",
    backgroundColor: "#ffffff",
  },
});

export default Carousel;
