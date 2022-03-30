import { enableNetworkProviderAsync } from "expo-location";
import React from "react";
import { Image, View } from "react-native";

import { Text } from "../../components";

import CardLayout from "./StationsCardLayout";

export enum StationType {
  CALTEX,
  SHELL,
  BP,
  SEVENELEVEN,
  AMPOL,
  LOWES,
  LIBERTY,
  METRO,
  MOBIL,
  SPEEDWAY,
  UNITED
}

export interface CardModel {
  id: number;
  type: StationType;
  address: string;
  petrolType: string;
  petrolPrice: number;
}

interface CardProps {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const bplogo = require("./assets/bp.jpg");
const sevenelevenlogo = require("./assets/7eleven.png");
const ampollogo = require("./assets/caltex.png");
const caltexlogo = require("./assets/caltex.png");
const libertylogo = require("./assets/liberty.png");
const loweslogo = require("./assets/lowes.png");
const metrologo = require("./assets/metro.jpg");
const mobillogo = require("./assets/mobil.png");
const shelllogo = require("./assets/shell.png");
const speedwaylogo = require("./assets/speedway.png");
const unitedlogo = require("./assets/united.png");

const checkLogo = (card) => {
  if (card.type == StationType.CALTEX)
    return caltexlogo
  else if (card.type == StationType.SHELL)
    return shelllogo
  else if (card.type == StationType.BP)
    return bplogo
  else if (card.type == StationType.SEVENELEVEN)
    return sevenelevenlogo
  else if (card.type == StationType.AMPOL)
    return ampollogo
  else if (card.type == StationType.LOWES)
    return loweslogo
  else if (card.type == StationType.LIBERTY)
    return libertylogo
  else if (card.type == StationType.METRO)
    return metrologo
  else if (card.type == StationType.MOBIL)
    return mobillogo
  else if (card.type == StationType.SPEEDWAY)
    return speedwaylogo
  else
    return unitedlogo
}

const Card = ({ card, selected, onSelect }: CardProps) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background"}
    >
      <View style={{ height: 20 }}>
        <Image
          style={
            card.type === StationType.CALTEX
              ? { width: 39, height: 13 }
              : { width: 32.5, height: 20 }
          }
          source={checkLogo(card)}
        />
      </View>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "text"}
      >
        {card.address}
      </Text>
      <Text opacity={0.5}>Price</Text>
      <Text color={selected ? "background" : "text"}>{card.petrolPrice}</Text>
      <Text opacity={0.5}>Type</Text>
      <Text color={selected ? "background" : "text"}>{card.petrolType}</Text>
    </CardLayout>
  );
};

export default Card;
