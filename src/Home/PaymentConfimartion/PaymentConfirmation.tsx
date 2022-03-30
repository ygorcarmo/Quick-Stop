import React, { useState } from "react";
import { useTiming } from "react-native-redash";
import { ScrollView, Dimensions } from "react-native";
import {
    Box,
    Text,
    Button,
    RoundedIcon,
    useTheme,
    Header,
} from "../../components";

const SIZE = 80;
import { HomeNavigationProps } from "../../components/Navigation";

const { width: wWidth } = Dimensions.get("window");

const PaymentConfirmation = ({ navigation }: HomeNavigationProps<"PaymentConfirmation">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTiming(currentIndex); const theme = useTheme();

    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);

    return (
        <Box flex={1} backgroundColor="background">
            <Header
                title="Payment Confirmation"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            />
            <Box flex={1}>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: theme.spacing.m,
                        paddingBottom: footerHeight,
                    }}
                >
                    <Box alignSelf="center">
                        <RoundedIcon
                            name="check"
                            size={SIZE}
                            backgroundColor="primaryLight"
                            color="primary"
                        />
                    </Box>
                    <Text variant="title1" textAlign="center" marginVertical="l">
                        Payment Successfull
                    </Text>
                    <Text variant="body" textAlign="center" marginBottom="l">
                        Close this window and continue with your journey
                    </Text>
                    <Box alignItems="center" marginTop="m">
                        <Button
                            variant="primary"
                            onPress={() => navigation.navigate("PetrolStations")}
                            label="Go Back"
                        />
                    </Box>
                </ScrollView>
            </Box>
        </Box>
    );
};

export default PaymentConfirmation;
