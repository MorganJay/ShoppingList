/* eslint-disable curly */
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
// import 'react-native-get-random-values';
// import { v4 as uuid } from 'uuid';
import Colors from './config/colors';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const randomId = () => Math.random().toFixed(4) * 100000;

const App = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([
    { id: randomId(), text: 'Milk' },
    { id: randomId(), text: 'Eggs' },
    { id: randomId(), text: 'Bread' },
    { id: randomId(), text: 'Milo' },
  ]);

  const handleChange = value => setNewItem(value);

  const deleteItem = id =>
    setItems(prevItems => prevItems.filter(item => item.id !== id));

  const addItem = text => {
    if (!text)
      return Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);

    setItems(prevItems => [{ id: randomId(), text }, ...prevItems]);
    setNewItem('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} newItem={newItem} onChange={handleChange} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
