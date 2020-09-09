import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const HeaderBox = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.hText}>Updated T&C's</Text>
    </View>
  );
};

const Title = () => {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.titleText}>My Rivian {"\n"}Shareholding</Text>
    </View>
  );
};
const SubTitle = () => {
  return (
    <View style={styles.subTitleBox}>
      <Text style={styles.subTitleText}>Variable rate home mortgage</Text>
    </View>
  );
};

const DownArrow = () => {
  return (
    <TouchableOpacity style={styles.downArrow}>
      <Image source={require("../../images/downarrow.png")} />
    </TouchableOpacity>
  );
};

const ProfileContainer = () => {
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity>
        <Image source={require("../../images/user.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.overlapImg}>
        <Image source={require("../../images/rivianlogo.png")} />
      </TouchableOpacity>
    </View>
  );
};

//main component
const CarousleItem = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#3a3762", "#5D59CB"]}
        start={{ x: 0, y: 0 }}
        style={styles.linear}
      >
        <View style={styles.header}>
          <HeaderBox />
          <ProfileContainer />
        </View>
        <Title />
        <SubTitle />
        <DownArrow />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: "hidden",
    /*width is given in units rather than percent because flalist width
      goes beyond visible region*/
    width: 322,
    height: 180,
    margin: 7,
    marginLeft: 20,
    // marginHorizontal: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  linear: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    height: "100%",
  },
  headerBox: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(83, 255, 216,0.2)",
    borderRadius: 5,

    paddingVertical: 5,
    paddingHorizontal: 4,
  },
  hText: {
    color: "#5effd8",
    fontSize: 12,
    lineHeight: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    //this is done because i want both child comp. on opp. ends
    justifyContent: "space-between",
  },
  profileContainer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "nowrap",
  },
  overlapImg: {
    //this is done because I wanted thi image to overlap first one
    position: "absolute",
    left: "60%",
  },
  titleText: {
    fontSize: 24,
    lineHeight: 29,
    color: "white",
    fontWeight: "600",
  },
  titleBox: {
    marginTop: 22,
  },
  subTitleText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.6,
  },
  subTitleBox: {
    marginTop: 9,
  },
  downArrow: {
    //this is done to push arrow icon to right bottom side of card component
    position: "absolute",
    bottom: 11,
    right: 10,
  },
});

export default CarousleItem;
