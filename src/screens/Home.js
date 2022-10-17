import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("screen");

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#5e69ee" style="dark-content" />
        <View>
          <View>
            <Text>Global Market Cap</Text>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    elevation: 10,
    // marginRight: 20,
    padding: 1,
    // marginLeft:20,
    // borderRadius: 20,
    // marginTop: 10,
  },

});
