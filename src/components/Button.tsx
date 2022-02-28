import { backgroundColor, color, useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
    }
})

interface ButtonProps {
    variant: "default" | "primary" | "transparent";
    label: string;
    onPress: () => void;
};

const Button = ({ variant, label, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>();

    const backgroundColor = variant === "primary" ? theme.colors.primary : variant === "transparent" ? "transparent" : theme.colors.grey;
    const color = variant === "primary" ? theme.colors.white : theme.colors.button

    return (
        <GestureHandlerRootView>
            <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
                <View>
                    <Text variant="button" style={{ color }}>{label}</Text>
                </View>
            </RectButton>
        </GestureHandlerRootView>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;
