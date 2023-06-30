import { View, Text, LogBox } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const HomeScreens = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreens</Text>
    </SafeAreaView>
  );
};

export default HomeScreens;
