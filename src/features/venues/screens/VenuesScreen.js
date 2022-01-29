import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from 'styled-components/native';

import { VenueInfoCard } from "../components/venue-info-card.component"; 

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 15px;
`;

const List = styled(View)`
  flex: 1;
  padding: 15px;
  border: solid grey 1px;
  border-radius: 5px;
  margin: 5px;
`;

export const VenuesScreen = () => (
  <SafeAreaContainer>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <List>
        <VenueInfoCard />
    </List>
  </SafeAreaContainer>
);