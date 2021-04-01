import { useEffect, useState } from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

const usePermission = (name: PermissionName) => {
  const [permission, setPermission] = useState<PermissionState>('granted');

  useEffect(() => {
    const getPermission = async () => {
      const { state } = await navigator.permissions.query({ name });
      setPermission(state);
    };
    getPermission();
  }, [name]);

  return permission;
};

export { usePermission };