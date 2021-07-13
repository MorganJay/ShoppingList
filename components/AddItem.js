import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Colors from '../config/colors';

const AddItem = ({ addItem, onChange, newItem }) => {
  //const [text, setText] = useState('');

  //const onChange = value => setText(value);
  console.log({ newItem });
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        defaultValue={newItem}
        autoFocus
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(newItem)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    backgroundColor: Colors.darkSlateBlue,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: Colors.darkSlateBlue,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
