import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";


export default function App() {


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <BannerAd
        unitId={"ca-app-pub-9887453620475057/8458012314"}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log("Advert loaded");
        }}
        onAdFailedToLoad={(error) => {
          console.error("Advert failed to load: ", error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
