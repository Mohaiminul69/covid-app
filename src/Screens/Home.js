import { SafeAreaView, ScrollView } from "react-native";
import React, { Fragment } from "react";
import { colors } from "../Theme/Colors";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import PreventTips from "../Components/PreventTips";

export default function Home() {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.purple }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightSkyBlue }}>
        <ScrollView>
          <Banner />
          <PreventTips />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
