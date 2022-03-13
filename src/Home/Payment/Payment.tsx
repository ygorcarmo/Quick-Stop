import React, { useState } from "react";
import { useTiming } from "react-native-redash";
import { ScrollView, Dimensions } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonActions } from "@react-navigation/native";
import { Box, Header, useTheme, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import TextInput from "../../components/Form/TextInput";
import Checkbox from "../../components/Form/Checkbox";

import Footer from "./Footer";
const { width: wWidth } = Dimensions.get("window");

const PaymentSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const Payment = ({ navigation }: HomeNavigationProps<"Payment">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTiming(currentIndex); const theme = useTheme();

    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        values,
        setFieldValue,
    } = useFormik({
        validationSchema: PaymentSchema,
        initialValues: { email: "", password: "", remember: true },
        onSubmit: () =>
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                })
            ),
    });

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
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            touched={touched.email}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            returnKeyType="next"
                            returnKeyLabel="next"
                        // onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            icon="credit-card"
                            placeholder="Enter Card Number"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            touched={touched.email}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            returnKeyType="next"
                            returnKeyLabel="next"
                        // onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="m">
                        <TextInput
                            icon="calendar"
                            placeholder="Enter Card Expiry Date"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            touched={touched.email}
                            autoCapitalize="none"
                            autoCompleteType="email"
                            returnKeyType="next"
                            returnKeyLabel="next"
                        // onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <TextInput
                        // ref={password}
                        icon="credit-card"
                        placeholder="Enter CVC"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginVertical="s"
                    >
                        <Checkbox
                            label="Remember details"
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember)}
                        />
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
