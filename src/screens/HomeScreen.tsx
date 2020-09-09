import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarouselItem from "../components/carouselItem/CarousleItem";
import Carousel from "../components/carousel/Carousel";
import CarouselTwo from "../components/carousel/CarouselTwo";
import ActivityLog from "../components/activtyLog/ActivityLog";
import CarouselThree from "../components/carousel/CarouselThree";
import ActivityList from "../components/activityList/ActivityList";

const HomeScreen = () => {
  return (
    <>
      {/* <Carousel /> */}
      {/* <CarouselTwo /> */}
      {/* <ActivityList /> */}
      <CarouselThree />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
