import { useState, useEffect } from 'react';
import { Position } from '../features/home/homeSlice';

export const usePosition = (): Position => {
  const [position, setPosition] = useState<Position | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setPosition({ lat: latitude, lon: longitude });
      },
      () => {
        console.log('Position Error');
      },
      {
        maximumAge: 0,
        enableHighAccuracy: true,
        timeout: Infinity,
      }
    );
  }, []);

  return position ?? null;
};
