# Developer Notes

Hopefully this file will help the contributing developer to understand what the heck each component is supposed to do. Components are ordered from parent to child.

## Components

### FilterByCity

- `updateCity` updates `state.selectedCity` to the city selected by the user
- `updateCity` is passed into child components FilterForm (as `onCityChange`) and EventCard (as `city`)

### FilerForm

- contains react-native Picker component to display city options
- on Picker's value change, `updateCity` is called with the new value passed in
- this updates the state of its parent FilterByCity, which in turn updates the prop passed to EventCard

### EventCard

- receives the currently selected city
- finds city data from `eventCards.json`
- renders event cards
