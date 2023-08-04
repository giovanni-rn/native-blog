import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from 'axios';

const SearchScreen: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [query, setQuery] = useState<any>('');
  const searchPosts = async () => {
      try {
        const {data} = await axios.get('http://10.0.2.2:5500/search/'+query);
        // console.log(data[0])
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher une publication</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Titre de la publication...'
        onChangeText={setQuery}
        defaultValue={query}
      />
      <Button title="Rechercher" onPress={searchPosts} />
      {posts.map(item => (
        <View key={item.title}>
        <Text style={styles.post_title}>{item.title}</Text>
        <Text style={styles.post_description}>{item.description}</Text>
        <Text style={styles.post_details}>{item.author} - {item.category}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  textInput: {
    margin: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  post_title: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 15,
  },
  post_description: {
    alignSelf: 'center',
    fontSize: 17,
  },
  post_details: {
    alignSelf: 'center',
    fontSize: 16,
  }
});

export default SearchScreen;