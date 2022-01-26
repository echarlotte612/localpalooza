import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text>Welcome to LocalPalooza!</Text>
        <View style={styles.search}>
          <Searchbar />   
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    backgroundColor: '#ffa'
  }
});
