import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovieApi,  errorMessage, results] = useResults();

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm} // same as above
        onTermSubmit={() => searchMovieApi(searchTerm)}
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      <ResultsList results={results} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  errorText: {
    fontSize: 20,
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});
