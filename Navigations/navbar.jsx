import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

const Navbar = ({ isDarkMode, toggleDarkMode, navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? '#555' : '#007bff' }}>
      <View style={[styles.navbarContainer, { backgroundColor: isDarkMode ? '#555' : '#007bff' }]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={30} color={isDarkMode ? "#fff" : "#000"} />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://e-learning-ebon-three.vercel.app/_next/image?url=%2Ftest3.png&w=256&q=75' }}
          style={styles.logo}
        />
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;