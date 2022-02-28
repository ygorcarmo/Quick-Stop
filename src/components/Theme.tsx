import { createBox, createText } from "@shopify/restyle";

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
};

const theme = {
    colors: {
        primary: "#2CB9D0",
        title: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)",
        white: "white",
        grey: "rgba(12, 13, 52, 0.05)"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadius: {
        s: 4,
        m: 10,
        l: 25,
        xl: 40,
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
export default theme;
