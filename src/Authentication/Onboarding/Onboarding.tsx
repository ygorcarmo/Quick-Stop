import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { divide, interpolateColors, multiply } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";



import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import { theme } from "../../components";
import { AppRoutes, StackNavigationProps } from "../../components/Navigation";
import { RouterConfigOptions } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: theme.borderRadii.xl
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: theme.borderRadii.xl
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
        height: theme.borderRadii.xl,
        justifyContent: "center",
        alignItems: "center"
    },
});

const slides = [
    { title: "Relaxed", subtitle: "Find Your Outfits", description: "Confused about your outfit ? Don't worry. Find the best outfit here!", color: "#BFEAF5" },
    { title: "Playful", subtitle: "Hear it First, Wear it First", description: "Hating the clothes in your wardroble? Explore hundreds of outfit ideas", color: "#BEECC4" },
    { title: "Excentric", subtitle: "Your Style, Your Way", description: "Create your indidual & unique style and look amazing everyday", color: "#FFE4D9" },
    { title: "Funky", subtitle: "Look Good, Feel Good", description: "Discover the latest trends in fashion and empower your personality", color: "#FFDDDD" }
];

const Onboarding = ({ navigation }: StackNavigationProps<AppRoutes, "Onboarding">) => {
    const scroll = useRef<null | Animated.ScrollView>(null);
    // const x = useValue(0);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColors(x, {
        inputRange: slides.map((_, i) => i * width),
        outputColorRange: slides.map(slide => slide.color)
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler} >
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (<Dot key={index}
                            currentIndex={divide(x, width)}
                            {...{ index }} />))}
                    </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }]
                    }}>

                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === (slides.length - 1);

                            return (
                                (
                                    <Subslide
                                        key={index}
                                        onPress={() => {
                                            if (last)
                                                navigation.navigate("Welcome");
                                            else
                                                scroll?.current.scrollTo({ x: width * (index + 1), animated: true })

                                        }}
                                        {...{ subtitle, description, last }} />
                                )
                            )
                        })}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;
