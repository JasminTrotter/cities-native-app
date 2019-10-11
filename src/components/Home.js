import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { View } from 'react-native';

export default function Home() {
  const [showForm] = useState(false);

  return (
    <View style={{ padding: 30, height: 3000 }}>
      <Header />
      <Main showForm={showForm} />
      <Footer />
    </View>
  );
}
