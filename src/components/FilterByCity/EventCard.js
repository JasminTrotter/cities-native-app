import React from 'react';
import cityData from './eventCards.json';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EventCard(props) {
  const { city } = props;
  const cityMatch = cityData[city] ? cityData[city] : [];

  const renderCards = cityMatch.forEach(card => {
    <View style={styles.item}>
      <Text>{card.who}</Text>
      <Text>{card.what}</Text>
      <Text>{card.when}</Text>
      <Text>{card.where}</Text>
    </View>
  });

  const noEvents = <View style={styles.item}><Text>There are no events listed for this city. Check back later for updates!</Text></View>;
  console.log('cityMatch', cityMatch);

  console.log('rend', renderCards);

  return (
    <ScrollView style={styles.container}>
      {renderCards}
    </ScrollView>
  );

}


const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 10,
    padding: 10
  },
  container: {
    top: 200,
    height: 1000,
  }
});
