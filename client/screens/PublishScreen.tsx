import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from 'axios';

const PublishScreen: React.FC = () => {
  const [posts, setPost] = useState<any[]>([]);
  const [title, setTitle] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [author, setAuthor] = useState<any>('');
  const [category, setCategory] = useState<any>('');

  const uploadPost = async () => {
      try {
        const {data} = await axios.post("http://10.0.2.2:5500", {
          title: title,
          description: description,
          author: author,
          category: category,
        });
        setPost(data);
        alert("Upload successful : " + data["title"]);
        setTitle('');
        setDescription('');
        setAuthor('');
        setCategory('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une publication</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.textInput}
            placeholder='Titre de la publication'
            onChangeText={setTitle}
            defaultValue={title}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Description de la publication'
            onChangeText={setDescription}
            defaultValue={description}
          />
            <TextInput
              style={styles.textInput}
              placeholder='Auteur'
              onChangeText={setAuthor}
              defaultValue={author}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Catégorie'
              onChangeText={setCategory}
              defaultValue={category}
            />
        <Button title="Publier" onPress={uploadPost} />
      </View>
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
    margin: 10,
    marginBottom: 20,
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
  inputs: {
    marginTop: 10,
  }
});

export default PublishScreen;
