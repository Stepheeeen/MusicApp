// src/components/MusicList.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { tracks } from '../data';

interface MusicListProps {
  onSelect: (trackId: string) => void;
}

const MusicList: React.FC<MusicListProps> = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item.id)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1e',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  artist: {
    color: '#b3b3b3',
  },
});

export default MusicList;