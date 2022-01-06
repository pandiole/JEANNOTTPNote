import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const MovieListItem = ({movieData}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} />
      <View style={styles.informationContainer}>
        <Text style={styles.title}>
          {movieData.original_title}
        </Text>
        <Text style={styles.title}>
          {movieData.vote_average}
        </Text>
        <Text style={[styles.data, styles.cuisine]}
          numberOfLines={1}>
          {movieData.release_date}
        </Text>
        <Text style={[styles.data, styles.cuisine]}
          numberOfLines={1}>
          {movieData.overview}
        </Text>
      </View>
    </View>
  );
    
};

export default MovieListItem;


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 8,
    },
    informationContainer: {
      flex: 1,
      marginLeft: 12,
      justifyContent: 'center',
    },
    statsContainer: {
      flexDirection: 'row',
      marginTop: 12,
    },
    statContainer: {
      flexDirection: 'row',
      marginRight: 8,
    },
    thumbnail: {
      width: 128,
      height: 128,
      borderRadius: 12,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    data: {
      fontSize: 16,
    },
    cuisine: {
      fontStyle: 'italic',
    },
    stat: {
      marginLeft: 4,
    },
  });