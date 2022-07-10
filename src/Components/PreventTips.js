import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../Theme/Spacing";

export default function PreventTips() {
  return (
    <View
      style={{
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[7],
      }}
    >
      <Text
        preset="h2"
        style={{
          color: styles.red,
          marginBottom: spacing[3],
          marginLeft: spacing[3],
        }}
      >
        Prevention
      </Text>
      <View style={styles.flexWrapper}>
        <View style={styles.preventionTips}>
          <Image source={require("../../assets/img/distance.png")}></Image>
          <Text
            style={{
              textAlign: "center",
              lineHeight: 20,
              marginTop: 10,
            }}
          >
            Avoid close contact
          </Text>
        </View>
        <View style={styles.preventionTips}>
          <Image source={require("../../assets/img/cleanHands.png")}></Image>
          <Text
            style={{
              textAlign: "center",
              lineHeight: 20,
              marginTop: 10,
            }}
          >
            Clean your hands often
          </Text>
        </View>
        <View style={styles.preventionTips}>
          <Image source={require("../../assets/img/faceMusk.png")}></Image>
          <Text
            style={{
              textAlign: "center",
              lineHeight: 20,
              marginTop: 10,
            }}
          >
            Wear a facemask
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[3],
  },
  preventionTips: {
    flex: 1,
    alignItems: "center",
  },
});
