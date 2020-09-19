import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import CarouselItem from "../components/carouselItem/CarousleItem";
import Carousel from "../components/carousel/Carousel";
import CarouselTwo from "../components/carousel/CarouselTwo";
import ActivityLog from "../components/activtyLog/ActivityLog";
import CarouselThree from "../components/carousel/CarouselThree";
import ActivityList from "../components/activityList/ActivityList";
import Widget from "../components/widget/Widget";
import ShortcutTab from "../components/shortcut/ShortcutTab";

const height = Dimensions.get("window").height;

const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
        backgroundColor: "#ffffff",
      }}
    >
      <CarouselThree />
      <ActivityList />
      <Widget />
      <View
        style={{
          height: (height * 30) / 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ShortcutTab text={"Manage my data access"} />
        <ShortcutTab text={"Update my address"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
