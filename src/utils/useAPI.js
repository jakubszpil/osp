import { useEffect, useState } from 'react';

export default function useAPI(endpoint, defaultValue, refresh) {
  const [data, setData] = useState(defaultValue !== undefined ? defaultValue : null);
  const getData = async () => {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();

      setData(json);
    } catch (e) {
      setData(e.message);
    }
  };

  useEffect(() => {
    let refreshInterval = null;

    getData();

    if (refresh) refreshInterval = setInterval(getData, refresh);

    return () => clearInterval(refreshInterval);
  }, []);

  return data;
}
