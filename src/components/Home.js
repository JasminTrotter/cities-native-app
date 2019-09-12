import React from 'react';
import Header from './Header';
import { View } from 'react-native';
import FilterByCity from './FilterByCity/FilterByCity';
import Footer from './Footer';

export default function Home() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <Header />
      </View>
      <View>
        <FilterByCity />
      </View>
      <View>
        <Footer />
      </View>
    </View>
  );
}
