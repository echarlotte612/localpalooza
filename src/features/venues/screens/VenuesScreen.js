import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from 'styled-components/native';

import { VenueInfoCard } from "../components/venue-info-card.component"; 

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  border: solid ${(props) => props.theme.colors.ui.primary} 1px;
  border-radius: 5px;
  margin: ${(props) => props.theme.space[1]};
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