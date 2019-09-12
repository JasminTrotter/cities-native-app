import React from 'react';
import cityData from './eventCards.json';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function EventCard(props) {
  const { city } = props;
  const cityMatch = cityData[city] ? cityData[city] : [];
  const cards = card => {
    return <View key={card.index} style={styles.container}>
      <Text>{card.item.who}</Text>
      <Text>{card.item.what}</Text>
      <Text>{card.item.when}</Text>
      <Text>{card.item.where}</Text>
      {/* <Text style={{ color: 'blue' }}
                  onPress={() => LinkingIOS.openURL(card.link)}>
                  {card.link}
                </Text> */}
    </View>
  };
  const renderCards = (!cityMatch.length)
    ? <View style={styles.container}><Text>There are no events listed for this city. Check back later for updates!</Text></View>
    : <FlatList
      data={cityMatch}
      keyExtractor={(item, index) => item.who}
      renderItem={cards}
    />

  return (
    <View style={{ top: 200 }}>
      {renderCards}
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 10,
    padding: 10
  },
});
