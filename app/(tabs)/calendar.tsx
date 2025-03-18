import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "@/components";

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.txt}>Calendar</Text>
      <View style={styles.contentCalendar}>
        <Calendar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 50,
  },
  contentCalendar: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(138, 138, 208)`,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CalendarScreen;
