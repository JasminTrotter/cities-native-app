import React from 'react';
import cityData from './eventCards.json';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';

export default function EventCard(props) {
  const { city } = props;
  const cityMatch = cityData[city] ? cityData[city] : [];

  const cards = (card) => (
    <View key={card.index} style={styles.item}>
      <Text>{card.item.who}</Text>
      <Text>{card.item.what}</Text>
      <Text>{card.item.when}</Text>
      <Text>{card.item.where}</Text>
    </View>
  );

  const renderCards = (!cityMatch.length)
    ? <View style={styles.container}><Text>There are no events listed for this city. Check back later for updates!</Text></View>
    : <FlatList
      data={cityMatch}
      keyExtractor={(item, index) => item.who}
      renderItem={cards}
      contentContainerStyle={{ height: 1000 }}
    />

  return (
    <TouchableWithoutFeedback onPress={() => { }}>
      {renderCards}
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 10,
    padding: 10,
    height: 100
  }
});
