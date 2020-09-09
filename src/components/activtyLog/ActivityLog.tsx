import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageContainer = () => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={require("../../images/rivianlogo.png")} />
    </TouchableOpacity>
  );
};

const LogContainer = ({ logTime, logStat }: any) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logTime}>{logTime}</Text>
      <Text style={styles.logStatus}>{logStat}</Text>
    </View>
  );
};

//main component
const ActivityLog = ({ logTime, logStat }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <ImageContainer />
        <LogContainer logTime={logTime} logStat={logStat} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    overflow: "hidden",
    paddingVertical: 14,
    paddingHorizontal: 21,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
    marginHorizontal: "5%",
  },
  childContainer: {
    flexDirection: "row",
    width: "100%",
  },
  imageContainer: {
    width: "15%",
  },
  logContainer: {
    width: "85%",
  },
  logStatus: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  logTime: {
    fontSize: 12,
    lineHeight: 16,
    color: "#0a0c29",
  },
});

export default ActivityLog;
