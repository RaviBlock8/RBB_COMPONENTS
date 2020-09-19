import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ActivityLog from "../activtyLog/ActivityLog";
const { width } = Dimensions.get("window");

class DataClass {
  public time: string = "";
  public status: string = "";
  constructor(time: string, status: string) {
    this.time = time;
    this.status = status;
  }
}

const data = [
  new DataClass("Today", "Accessed your profile"),
  new DataClass("Yesterday", "Logged into Xero"),
  new DataClass("Thursday", "Logged into CBA"),
  new DataClass("12/11/20", "Synced new contacts"),
];

const Heading = () => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.Header}>
        <Text style={styles.headerText}>Recent Data Activity</Text>
      </View>
      <View style={styles.ImageContainer}>
        <TouchableOpacity>
          <Image source={require("../../images/Shape.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ActivityList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.status}
        renderItem={({ item, index }) => {
          return <ActivityLog logTime={item.time} logStat={item.status} />;
        }}
        ListHeaderComponent={<Heading />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 10,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: (width * 86) / 100,
    marginHorizontal: (width * 7) / 100,
    marginBottom: 18,
  },
  Header: {
    width: "87%",
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
  },
  ImageContainer: {
    width: "13%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 7,
  },
  contractAmount: {
    width: 27,
    height: 22,
    backgroundColor: "#f1f3f6",
    borderRadius: 7,
    alignItems: "center",
  },
});

export default ActivityList;
