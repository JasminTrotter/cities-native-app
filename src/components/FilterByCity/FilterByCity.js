import React, { useState } from 'react';
import EventCard from './EventCard';
import FilterForm from './FilterForm';
import { View } from 'react-native';

export default function FilterByCity() {
    const [selectedCity, setCity] = useState('Portland');

    const updateCity = (value) => {
        setCity(value);
    }

    return (
        <View>
            <FilterForm onCityChange={updateCity} city={selectedCity} />
            <EventCard city={selectedCity} />
        </View>
    );
}
