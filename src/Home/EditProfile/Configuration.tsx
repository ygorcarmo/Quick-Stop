import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";

import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

const outfitType = [
  { value: "men", label: "Car" },
  { value: "women", label: "Truck" },
  { value: "both", label: "Motorbike" },
];

const sizes = [
  { value: "E10" },
  { value: "91" },
  { value: "95" },
  { value: "98" },
  { value: "Diesel" },
];

const colors = [
  { value: "#0C0D34" },
  { value: "#FF0058" },
  { value: "#50B9DE" },
  { value: "#00D99A" },
  { value: "#FE5E33" },
];

const preferredBrands = [
  { value: "adidas", label: "7Eleven" },
  { value: "nike", label: "SpeedWay" },
  { value: "converse", label: "BP" },
  { value: "tommy-hilfiger", label: "Coles Express" },
  { value: "billionaire-boys-club", label: "Metro" },
  { value: "jordan", label: "Ampol" },
  // { value: "le-coq-sportif", label: "Le Coq Sportif" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of vehicle do you have?</Text>
        <CheckboxGroup options={outfitType} radio />
        <Text variant="body">What is your preferred fuel ?</Text>
        <RoundedCheckboxGroup options={sizes} />
        {/* <Text variant="body">My preferred clothing colors</Text>
        <RoundedCheckboxGroup options={colors} valueIsColor /> */}
        <Text variant="body">My preferred petrol stations</Text>
        <CheckboxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
