import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useValue, onScrollEvent } from "react-native-redash";



import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1,
    }
});

const Onboarding = () => {
    const x = useValue(0);
    const onScroll = onScrollEvent({ x });
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...{ onScroll }} >
                    <Slide label="Relaxed" />
                    <Slide label="Playful" right />
                    <Slide label="Excentric" />
                    <Slide label="Funky" right />
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }} />
                <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}>

                </View>
            </View>
        </View>
    );
};

export default Onboarding;
