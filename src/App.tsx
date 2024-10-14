// src/App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MusicList from './components/MusicList';
import MusicPlayer from './components/MusicPlayer';

const Stack = createStackNavigator();

const App = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Music List">
          {() => <MusicList onSelect={handleSelectTrack} />}
        </Stack.Screen>
        <Stack.Screen name="Now Playing">
          {() => (selectedTrackId ? <MusicPlayer trackId={selectedTrackId} /> : null)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;