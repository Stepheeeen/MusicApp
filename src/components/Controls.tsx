// src/components/Controls.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { Ionicons } from '@expo/vector-icons';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isPlaying, onPlayPause, onNext, onPrev }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrev}>
        <Ionicons name="play-skip-back-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        <Ionicons name={isPlaying ? "pause-circle-outline" : "play-circle-outline"} size={50} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Ionicons name="play-skip-forward-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Controls;
