import React, { useState } from 'react';
import EventCard from './FilterByCity/EventCard';
import FilterForm from './FilterByCity/FilterForm';
import { View } from 'react-native';

export default function Main(props) {
    const [selectedCity, setCity] = useState('Portland');

    const updateCity = (value) => {
        setCity(value);
    }

    if (props.showForm) {

        return (
            <View>
                <FilterForm onCityChange={updateCity} city={selectedCity} />
                <EventCard city={selectedCity} />
            </View>
        );
    } else {
        return (
            <View>
                
            </View>
        );
    }

}
