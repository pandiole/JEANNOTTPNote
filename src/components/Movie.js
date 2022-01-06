import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';


import { getMovieDetails } from '../api/TheMovieDB';

const Movie = ({ route, favMovies, dispatch }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    requestMovie();
  }, []); // Uniquement à l'initialisation

  // Pourrait être directement déclarée dans useEffect
  const requestMovie = async () => {
    try {
      const apiMovieResult = await getMovieDetails(route.params.movieID);
      setMovie(apiMovieResult);
    //   setIsLoading(false);
    } catch (error) {
    //   setIsError(true);
    }
  }

  const saveMovie = async () => {
    const action = { type: 'SAVE_MOVIE', value: route.params.movieID };
    dispatch(action);
  }

  const unsaveMovie = async () => {
    const action = { type: 'UNSAVE_MOVIE', value: route.params.movieID };
    dispatch(action);
  }

  const displaySaveMovie = () => {
    if (favMovies.findIndex(i => i === route.params.movieID) !== -1) {
      // Le restaurant est sauvegardé
      return (
        <Button
          title='Retirer des favoris'
          onPress={unsaveMovie}
        />
      );
    }
    // Le restaurant n'est pas sauvegardé
    return (
      <Button
        title='Ajouter aux favoris'
        onPress={saveMovie}
      />
    );
  }

  return (
    <View style={styles.container}>
        {displaySaveMovie()}
          <Text>
            {movie.original_title}
          </Text>
          <Text>
            Release: {movie.release_date}
          </Text>
          <Text>
            Genre: {movie.genre.name}
          </Text>
          <Text>
            Runtime: {movie.runtime}
          </Text>
          {/* <Text>
            Cast: {movie.release_date}
          </Text> */}
          <Text>
            Overview: {movie.overview}
          </Text>
    </View>
  );
};

const mapStateToProps = (state) => {
    return {
      favMovies: state.favMoviesID
    }
  }

export default connect(mapStateToProps)(Movie);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});