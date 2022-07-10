import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "../Theme/Spacing";
import { colors } from "../Theme/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={[styles.flexWrapper, { marginTop: spacing[1] }]}>
        <Pressable onPress={() => alert("Navigation...")}>
          <EvilIcons name="navicon" size={28} color="white" />
        </Pressable>
        <Pressable onPress={() => alert("Notification...")}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.flexWrapper}>
        <Text preset="h1" style={{ color: "white", marginTop: spacing[4] }}>
          Covid-19
        </Text>
        <Pressable onPress={() => alert("Jao USA jao...")}>
          <View
            style={[
              styles.button,
              styles.flexWrapper,
              {
                backgroundColor: colors.white,
                paddingVertical: spacing[2],
              },
            ]}
          >
            <Image
              style={[styles.image, styles.flagImage]}
              source={require("../../assets/img/usaLogo.png")}
            ></Image>
            <Text style={{ marginHorizontal: spacing[4] }}>USA</Text>
            <Image
              style={[styles.image, styles.dropDownImage]}
              source={require("../../assets/img/dropdownIcon.png")}
            ></Image>
          </View>
        </Pressable>
      </View>
      <View style={{ marginTop: spacing[7] }}>
        <Text
          preset="h3"
          style={{ color: colors.white, marginTop: spacing[3] }}
        >
          Are you feelings sick?
        </Text>
        <Text
          preset="small"
          style={{
            color: colors.white,
            marginTop: spacing[3],
            lineHeight: 22,
          }}
        >
          If you feel sick with any of covid-19 symptoms please call or SMS us
          immediately for help.
        </Text>
      </View>
      <View style={styles.flexWrapper}>
        <Pressable onPress={() => alert("Call kortesi...")}>
          <View
            style={[
              styles.button,
              styles.flexWrapper,
              { backgroundColor: colors.red },
            ]}
          >
            <FontAwesome
              style={{ marginLeft: spacing[2] }}
              name="phone"
              size={22}
              color="white"
            />
            <Text
              preset="h4"
              style={{
                marginHorizontal: spacing[4],
                color: colors.white,
              }}
            >
              Call Now
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => alert("Sending Msg...")}>
          <View
            style={[
              styles.button,
              styles.flexWrapper,
              { backgroundColor: colors.blue },
            ]}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: spacing[2] }}
              name="message-reply"
              size={22}
              color="white"
            />
            <Text
              preset="h4"
              style={{
                marginHorizontal: spacing[4],
                color: colors.white,
              }}
            >
              Send SMS
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    height: 360,
    padding: spacing[7],
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  flexWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[3],
  },
  button: {
    padding: spacing[3],
    borderRadius: 50,
  },
  image: {
    resizeMode: "contain",
  },
  flagImage: {
    width: 31,
    height: 31,
  },
  dropDownImage: {
    width: 12,
    height: 10,
    marginRight: spacing[2],
  },
});
