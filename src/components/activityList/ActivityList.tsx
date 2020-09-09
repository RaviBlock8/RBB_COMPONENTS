import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import ActivityLog from "../activtyLog/ActivityLog";

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

const ActivityList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.status}
        renderItem={({ item, index }) => {
          return <ActivityLog logTime={item.time} logStat={item.status} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
});

export default ActivityList;
