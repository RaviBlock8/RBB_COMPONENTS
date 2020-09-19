import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
      <Text style={styles.titleText}>My Employment{"\n"}Contract</Text>
    </View>
  );
};
const SubTitle = () => {
  return (
    <View style={styles.subTitleBox}>
      <Text style={styles.subTitleText}>Game Designer Contract</Text>
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
        <Image source={require("../../images/easports.png")} />
      </TouchableOpacity>
    </View>
  );
};

//main component
const CarouselItem5 = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1526c1", "#2d8dab"]}
        start={{ x: 0, y: 0 }}
        style={styles.linear}
      >
        <View style={styles.header}>
          {/* <HeaderBox /> */}
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
    /*Fixed width is 322 by designs , but to make it more responsive I'm trying to calculate them on screen dimensions*/
    width: (width * 86) / 100,
    //reason I'm not giving height because height is expanding on scroll view container basis
    //right now by calculation it is 24% of total phone height
    // height: (width * 45) / 100,
    marginRight: (width * 3) / 100,
    // marginHorizontal: (width * 5) / 100,
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
    paddingLeft: 23,
    paddingRight: 16,
    paddingVertical: 18,
    height: "100%",
  },
  headerBox: {
    // width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(83, 255, 216,0.2)",
    borderRadius: 5,

    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  hText: {
    color: "#53ffd8",
    fontSize: 12,
    lineHeight: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    //this is done because i want both child comp. on opp. ends
    justifyContent: "flex-end",
  },
  profileContainer: {
    // width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  overlapImg: {
    //this is done because I wanted thi image to overlap first one
    position: "relative",
    right: "25%",
  },
  overlapImg2: {
    //this is done because I wanted thi image to overlap first one
    position: "relative",
    right: "50%",
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
    right: 11,
  },
});

export default CarouselItem5;
