import React from 'react';
import kitty from '../assets/rainbow-kitty.jpeg';
import { Image } from 'react-native';
import { Text, View } from 'react-native';

export default function Header() {
    return (
        <View>
            <View>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={kitty}
                />
                <View>
                    <Text></Text>
                </View>
            </View>
        </View>
    );
}
