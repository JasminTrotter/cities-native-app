import React, { useState } from 'react';
import { View, Picker } from 'react-native';

export default function FilterForm(props) {
    return (
        <Picker
            selectedValue={props.city}
            onValueChange={(itemValue) =>
                props.onCityChange(itemValue)
            }
        >
            <Picker.Item value='Portland' label='Portland' />
            <Picker.Item label='Los Angeles' value='Los Angeles' />
            <Picker.Item label='San Francisco' value='San Francisco' />
        </Picker>
    );
}
