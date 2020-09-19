import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// const { width, height } = Dimensions.get("window");
const width = Dimensions.get("window").width;

const LogoContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../../images/rivianname.png")} />
    </View>
  );
};

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Rivian</Text>
    </View>
  );
};

const PriceContainer = () => {
  return (
    <View style={styles.priceContainer}>
      <View style={styles.pcBox}>
        <Text style={styles.pcBoxHeading}>Current Share Price</Text>
        <Text style={styles.pcBoxPrice}>
          $12.65
          <Text style={styles.currencyBox}>
            <Image source={require("../../images/rise.png")} />
            <Text style={styles.pcBoxCurrency}>AUD</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.pcBox}>
        <Text style={styles.pcBoxHeading}>Current Shareholding</Text>
        <Text style={styles.pcBoxPrice}>
          $24,505<Text style={styles.pcBoxCurrency}>AUD</Text>
        </Text>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require("../../images/whitecheck.png")} />
      <Text style={styles.footerText}> MyStake | Certified RedBelly Delta</Text>
    </View>
  );
};

const DownArrow = () => {
  return (
    <TouchableOpacity style={styles.downArrow}>
      <Image source={require("../../images/downarrow2.png")} />
    </TouchableOpacity>
  );
};

export default function Widget() {
  return (
    <View style={styles.widgetContainer}>
      <ImageBackground
        source={require("../../images/carbg.png")}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]}
          style={styles.linear}
        >
          <LogoContainer />
          <DownArrow />
          <Title />
          <PriceContainer />
          <Footer />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  widgetContainer: {
    width: (width * 88) / 100,
    height: 202,
    borderRadius: 7,
    overflow: "hidden",
    marginHorizontal: (width * 6) / 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  linear: {
    width: "100%",
    height: "100%",
    paddingHorizontal: "6%",
    paddingVertical: "5%",
  },
  logoContainer: {
    paddingVertical: 22,
    paddingHorizontal: 14,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    //calculated keeping width as 382 for base
    left: "70%",
    //calculated using generator and not figma actual value
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  downArrow: {
    //this is done to push arrow icon to right bottom side of card component
    position: "absolute",
    bottom: 11,
    right: 10,
  },
  title: {
    fontSize: 22,
    lineHeight: 33,
    color: "#ffffff",
    fontWeight: "bold",
    //will decide whether there is need to define padding in % or not
    paddingBottom: 35,
  },
  priceContainer: {
    flexDirection: "row",
  },
  pcBox: {
    flex: 1,
  },
  pcBoxHeading: {
    fontSize: 12,
    lineHeight: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
  pcBoxPrice: {
    fontSize: 26,
    lineHeight: 39,
    color: "#ffffff",
    fontWeight: "bold",
  },
  currencyBox: {
    textAlign: "center",
  },
  pcBoxCurrency: {
    fontSize: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 11,
    left: "6%",
  },
  footerText: {
    fontSize: 8,
    lineHeight: 10,
    color: "#ffffff",
    opacity: 0.6,
  },
});
