import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const {data} = await axios.get('http://10.0.2.2:5500');
        // console.log(data[0]);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toutes les publications</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  post_title: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 10,
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

export default HomeScreen;
