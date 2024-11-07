import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, leftIcon, rightIcon }: { title: string, leftIcon?: React.JSX.Element, rightIcon?: React.JSX.Element }) => {
  return (
    <View style={styles.headerContainer}>
     {leftIcon && leftIcon}

      <Text style={styles.title}>{title}</Text>

      {rightIcon && rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Header;
