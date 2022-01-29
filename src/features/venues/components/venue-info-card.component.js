import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const Title = styled(Text)`
    padding: 16px;
    color: hotpink
`;

const VenueCard = styled(Card)`
    padding: 5px;
`;

const VenueCardPic = styled(Card.Cover)`
    padding: 5px;
    background-color: white;
`;

export const VenueInfoCard = ({ venue = {} }) => {
    const {
        name = 'a venue',
        profilepic = 'https://picsum.photos/700',
        images = ['https://images.pexels.com/photos/849/people-festival-party-dancing.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
        address = '33 add street',
        isOpenNow = false,
        rating = 4,
        isClosedTemporarily
    } = venue;
    return (
        <VenueCard elevation={3} >
            <Title>{name}</Title> 
            <VenueCardPic source={{ uri:profilepic }} />
        </VenueCard>
    )
}
