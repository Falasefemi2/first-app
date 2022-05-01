import { useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ListItem from "./components/ListItem";



export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Juice' },
    { id: uuidv4(), text: 'Bread' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} />} deleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

});

