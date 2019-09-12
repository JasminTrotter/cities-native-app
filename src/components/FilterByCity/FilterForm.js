import React, { useState } from 'react';
import { View, Picker } from 'react-native';

export default function FilterForm(props) {
    return (
        <View>
            <Picker
                selectedValue={props.city}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue) =>
                    props.onCityChange(itemValue)
                }>
                <Picker.Item value='Portland' label='Portland' />
                <Picker.Item label='Los Angeles' value='Los Angeles' />
                <Picker.Item label='San Francisco' value='San Francisco' />
            </Picker>
        </View>
    );
}
