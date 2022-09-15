import { useEffect, useState } from 'react';

export const useLocalStorageHook = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    const storageSave = localStorage.getItem(key);
    if (storageSave) {
      return JSON.parse(storageSave);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
