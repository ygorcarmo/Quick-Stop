import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Box, Header, theme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import TextInput from "../../components/Form/TextInput";

import Footer from "./Footer";
import { CARD_HEIGHT } from "../Cart/CardLayout";
import AddCard from "../Cart/AddCard";
import Card, { CardType } from "../Cart/Card";

const cards = [
    {
        id: 0,
        type: CardType.VISA,
        last4Digits: 5467,
        expiration: "05/24",
    },
    {
        id: 1,
        type: CardType.MASTERCARD,
        last4Digits: 2620,
        expiration: "05/24",
    },
];


const Payment = ({ navigation }: HomeNavigationProps<"Payment">) => {
    const [footerHeight, setFooterHeight] = useState(0);
    const [selectedCard, setSelectedCard] = useState(cards[0].id);


    return (
        <Box flex={1} backgroundColor="background">
            <Header
                title="Petrol Payment"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            />
            <Box flex={1}>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: theme.spacing.m,
                        paddingBottom: footerHeight,
                    }}
                >
                    <Box marginBottom="m">
                        <TextInput
                            icon="droplet"
                            placeholder="Enter Pump Number"
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                        />
                    </Box>
                    <Box height={CARD_HEIGHT}>
                        <ScrollView horizontal>
                            <AddCard />
                            {cards.map((card) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    selected={selectedCard === card.id}
                                    onSelect={() => setSelectedCard(card.id)}
                                />
                            ))}
                        </ScrollView>
                    </Box>
                </ScrollView>
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    onLayout={({
                        nativeEvent: {
                            layout: { height },
                        },
                    }) => setFooterHeight(height)}
                >
                    <Footer
                        label="Pay"
                        onPress={() => {
                            navigation.navigate("PaymentConfirmation");
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Payment;
