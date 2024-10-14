// src/components/MusicPlayer.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TrackPlayer, { State, useTrackPlayerEvents } from 'react-native-track-player';
import Controls from './Controls';
import { tracks } from '../data';

const MusicPlayer: React.FC<{ trackId: string }> = ({ trackId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const track = tracks.find((t) => t.id === trackId);
    if (track) {
      TrackPlayer.setupPlayer().then(async () => {
        await TrackPlayer.add({
          id: track.id,
          url: track.url,
          title: track.title,
          artist: track.artist,
        });
        await TrackPlayer.play();
        setIsPlaying(true);
      });
    }

    return () => {
      TrackPlayer.stop();
      TrackPlayer.reset();
    };
  }, [trackId]);

  const handlePlayPause = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  const handleNext = async () => {
    await TrackPlayer.skipToNext();
    setIsPlaying(true);
  };

  const handlePrev = async () => {
    await TrackPlayer.skipToPrevious();
    setIsPlaying(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tracks.find(t => t.id === trackId)?.title}</Text>
      <Text style={styles.artist}>{tracks.find(t => t.id === trackId)?.artist}</Text>
      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  artist: {
    color: '#b3b3b3',
    fontSize: 18,
  },
});

export default MusicPlayer;