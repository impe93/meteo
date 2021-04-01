import { useState, useEffect } from 'react';

type Position = {
  latitude: number;
  longitude: number;
};

export const usePosition = (): Position => {
  const [position, setPosition] = useState<Position | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setPosition({ latitude, longitude });
      },
      () => {
        console.log('Position Error')
      },
      {
        maximumAge: 0,
        enableHighAccuracy: true,
        timeout: Infinity,
      }
    );
  }, []);

  return { ...position };
};
