import { backgroundColor, color, useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import { Theme } from "./Theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 15,
        fontFamily: "SFProText-Regular",
        textAlign: "center"
    }
})

interface ButtonProps {
    variant: "default" | "primary";
    label: string;
    onPress: () => void;
};

const Button = ({ variant, label, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>();

    const backgroundColor = variant === "primary" ? theme.colors.primary : theme.colors.body;
    const color = variant === "primary" ? theme.colors.white : theme.colors.text

    return (
        <GestureHandlerRootView>
            <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
                <View>
                    <Text style={[styles.label, { color }]}>{label}</Text>
                </View>
            </RectButton>
        </GestureHandlerRootView>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;
