import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';

import { getMovieDetails } from '../api/TheMovieDB';

const FavMovies = ({ navigation, favMovies }) => {

  const [movies, setMovies] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [isError, setIsError] = useState(false);

  useEffect(() => {
    refreshFavMovies();
  }, [favMovies]); // A chaque fois que les restaurants favoris changent

  const refreshFavMovies = async () => {
    // setIsRefreshing(true);
    // setIsError(false);
    let movies = [];
    try {
      for (const id of favMovies) {
        const apiSearchResult = await getMovieDetails(id)
        movies.push(apiSearchResult);
      };
      setMovies(movies);
    } catch (error) {
      // setIsError(true);
      // setMovies([]);
    }
    setIsRefreshing(false);
  };

  const navigateToMoviesDetails = (movieID) => {
    navigation.navigate("ViewMovie", { movieID });
  };

  const amIaFavMovie = (movieID) => {
    if (favMovies.findIndex(i => i === movieID) !== -1) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      {
        // isError ?
        //   (<DisplayError message='Impossible de récupérer les movies favoris' />) :
          <FlatList
            data={movies}
            extraData={favMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieListItem
                movieData={item}
                onClick={navigateToMoviesDetails}
                isFav={amIaFavMovie(item.id)} />
            )}
            // refreshing={isRefreshing}
            // onRefresh={refreshFavMovies}
          />
      }
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    favMovies: state.favRestaurantsID
  }
}

export default connect(mapStateToProps)(FavMovies);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
});