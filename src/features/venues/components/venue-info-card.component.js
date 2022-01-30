import React from "react";
import { Text, View } from "react-native";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const Title = styled(Text)`
    color: ${(props) => props.theme.colors.text.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    text-transform: uppercase;
`;

const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: ${(props) => props.theme.fontSizes.caption};
    text-transform: capitalize;
`;

const VenueCard = styled(Card)`
    padding: ${(props) => props.theme.space[1]};
`;

const VenueCardPic = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[1]};
    background-color: ${(props) => props.theme.colors.bg.primary};
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
            <VenueCardPic source={{ uri:profilepic }} />
            <Info>
              <Title>{name}</Title>
              <Address>{address}</Address> 
            </Info>
        </VenueCard>
    )
}
