import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

import MovieListItem from './MovieListItem';
import { getMovies } from '../api/TheMovieDB';

const Search = ({navigation}) => {

    const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    // const [nextOffset, setNextOffset] = useState(0);
    // const [isMoreResults, setIsMoreResults] = useState(true);

    // const requestMovies = async (prevMovies, offset) => {
    //     try {
    //         const apiSearchResult = await getMovies(searchTerm);
    //         setMovies(...prevMovies, ...apiSearchResult.results);
    //       if (apiSearchResult.page < apiSearchResult.total_pages) {
    //         setIsMoreResults(true);
    //         setNextOffset(apiSearchResult.page + 1);
    //       } else {
    //         setIsMoreResults(false);
    //       }
    //     } catch (error) {
    //     }
    //   };

    const searchMovies = async () => {
        const apiSearchResult = await getMovies();
        setMovies(apiSearchResult.results);
    };

    // const loadMoreMovies = () => {
    //     if (isMoreResults) {
    //       requestMovies(movies, nextOffset);
    //     };
    //   };

     useEffect(() => {
        searchMovies();
    }, []);

    const navigateToMovieDetails = (movieID) => {
        navigation.navigate("ViewMovie", { movieID });
    };


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Movie'
          style={styles.inputRestaurantName}
          onChangeText={(text) => setSearchTerm(text)}
        />
         <Button
          title='Rechercher'
          onPress={searchMovies}
        />
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <MovieListItem movieData={item} 
            onClick={navigateToMovieDetails} />
        // onEndReached={loadMoreMovies}
            // onEndReachedThreshold={0.5}
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  inputRestaurantName: {
    marginBottom: 8,
  },
});