import React from 'react';
import Header from './Header';
import FilterByCity from './FilterByCity/FilterByCity';
import Footer from './Footer';
import { View } from 'react-native';

export default function Home() {
  return (
    <View style={{ padding: 30, height: 3000 }}>
      <Header />
      <FilterByCity />
      <Footer />
    </View>
  );
}
