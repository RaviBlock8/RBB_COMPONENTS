import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const width = Dimensions.get("window").width;
interface props {
  text: string;
}
export default function ShortcutTab({ text }: props) {
  return (
    <TouchableOpacity>
      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: (width * 39) / 100,
    paddingVertical: 20,
    paddingHorizontal: 26,
    backgroundColor: "#0a0c29",
    borderRadius: 6,
    overflow: "hidden",
  },
  tabText: {
    color: "white",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
  },
});
