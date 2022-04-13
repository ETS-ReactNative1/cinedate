import {FlatList, SafeAreaView, StatusBar, StyleSheet,} from "react-native";
import React, {useEffect} from "react";
import AutomaticFlipCard from "../Components/AutomaticFlipCard";
import {FAB} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {getAdverts} from "../hooks/wlobbyGetters";
import LoadingIndicatior from "../Components/LoadingIndicatior";
import ChatHeader from "../Components/ChatComponents/ChatHeader";
import {Image, View} from "moti";

const HomeScreen = () => {
  const data = [
    {
      filmName: "Lord Of The Rings",
      ownerName: "John",
    },
    {
      filmName: "Harry Potter",
      ownerName: "Mike",
    },
    {
      filmName: "Star Wars",
      ownerName: "Sara",
    },
  ];

  const [getAdvertsData, adverts, errorMessage, loading] = getAdverts();

  const [films, setFilms] = React.useState([]);

  useEffect(() => {
    getAdvertsData();
    navigation.setOptions({
      headerTitle: () => <ChatHeader userId={2} />,
    });
  }, []);

  let FlatListItemSeparator;
  FlatListItemSeparator = () => {
    return (
      <SafeAreaView
        style={{
          height: 1,
          alignSelf: "center",
          width: "90%",
          backgroundColor: "#6200ed",
        }}
      />
    );
  };

  const navigation = useNavigation();
  // console.log("films", films);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      {loading ? (
        <LoadingIndicatior size={100} />
      ) : (
        <View style={{ height: "100%", width: "100%" }}>
          <Image
            source={require("../../assets/Wlobby-logos_transparent.png")}
            style={styles.logo}
          />
          <FlatList
            style={{ height: "100%", width: "100%" }}
            data={adverts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.AdvertID}
            renderItem={({ item }) => (
              <AutomaticFlipCard
                advert={item}
                navigation={navigation}
                movieID={item.FilmID}
              />
            )}
          ></FlatList>
        </View>
      )}

      {/* TODO: Make status bar changeable in the future */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#61dafb"
        animated={true}
      />
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        onPress={() => navigation.navigate("Set", {movieName: ''})}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "10%",
    resizeMode:'contain',
    marginBottom: "5%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#6200ed",
  },
});
