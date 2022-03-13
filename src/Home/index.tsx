import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import PetrolStations from "./PetrolStations";
import FavoritePetrolStations from "./FavoritePetrolStations";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import Cart from "./Cart";
import Payment from "./Payment";
import PaymentConfirmation from "./PaymentConfimartion";
export { assets } from "./Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerContent />}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="PetrolStations" component={PetrolStations} />
    <Drawer.Screen name="FavoritePetrolStations" component={FavoritePetrolStations} />
    <Drawer.Screen name="Payment" component={Payment} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Cart" component={Cart} />
    <Drawer.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
  </Drawer.Navigator>
);
