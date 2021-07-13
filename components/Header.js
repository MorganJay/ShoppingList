import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../config/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Miracle's Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: Colors.darkSlateBlue,
  },
  text: {
    color: Colors.white,
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
