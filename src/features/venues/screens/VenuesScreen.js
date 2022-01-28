import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { VenueInfo } from "../components/venue-info.component"; 

export const VenuesScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
        <VenueInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 15,
  },
  list: {
    flex: 1,
    padding: 15,
    border: 'solid grey 1px',
    borderRadius: 5,
    margin: 5
  },
});