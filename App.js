import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { VenuesScreen } from './src/features/venues/screens/VenuesScreen';

export default function App() {
  return (
    <>
      <VenuesScreen />
      <ExpoStatusBar style="auto" />
    </>
  ); 
}
