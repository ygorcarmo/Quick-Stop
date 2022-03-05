import {
    ThemeProvider as ReStyleThemeProvider,
    createText,
    createBox,
    useTheme as useReTheme,
} from "@shopify/restyle";

export const palette = {
    green: "#2CB9B0",
    white: "white",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
};

const theme = {
    colors: {
        primary: "#2CB9D0",
        secondary: "#0C0D34",
        title: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)",
        button: "#0C0D34",
        white: "white",
        grey: "rgba(12, 13, 52, 0.05)",
        lightGrey: "#F4F0EF",
        background: palette.white,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProDisplay-Bold",
            color: "white",
            textAlign: "center"
        },
        title1: {
            fontSize: 30,
            fontFamily: "SFProDisplay-Semibold",
            color: "title"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProDisplay-Semibold",
            color: "title"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProDisplay-Regular",
            color: "text"
        },
        button: {
            fontSize: 15,
            lineHeight: 24,
            fontFamily: "SFProDisplay-Medium",
            color: "text"
        }
    },
    breakpoints: {},
};


export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
export default theme;
