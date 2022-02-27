import { BaseTheme, createText } from "@shopify/restyle";

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

const theme: BaseTheme = {
    colors: {
        primary: "#2CB9D0",
        title: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)",
        white: "white"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProText-Bold",
            color: "white",
            textAlign: "center"
        },
        title1: {
            fontSize: 30,
            fontFamily: "SFProText-Semibold",
            color: "title"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProText-Semibold",
            color: "title"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProText-Regular",
            color: "text"
        },
    },
    breakpoints: {},
};


export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
