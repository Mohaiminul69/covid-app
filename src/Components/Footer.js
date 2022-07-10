import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { spacing } from "../Theme/Spacing";
import { colors } from "../Theme/Colors";
import Text from "./Text/Text";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={{ flex: 2.5 }}>
        <Image
          style={{ position: "absolute", top: -12, left: 5 }}
          source={require("../../assets/img/docGirl.png")}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text
          preset="h2"
          style={{
            color: colors.white,
            marginTop: spacing[4],
            fontSize: 22,
          }}
        >
          Do your own test!
        </Text>
        <Text
          preset="small"
          style={{
            lineHeight: 20,
            color: colors.white,
            marginTop: spacing[3],
          }}
        >
          Follow the instructions to do your own test.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginVertical: spacing[4],
    height: 104,
    paddingRight: spacing[3],
    backgroundColor: colors.purple,
    borderRadius: 16,
    marginHorizontal: spacing[6],
    flex: 1,
    position: "relative",
    flexDirection: "row",
  },
});
