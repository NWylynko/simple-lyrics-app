import React, { useState, useEffect } from 'react'

export default function useFetch(api) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(encodeURI(api))
      .then(response => {
        if (response.status !== 200) {
          throw new Error("bad status: " + response.status);
        }
        return response.json();
      })
      .then(json => json.lyrics)
      .then(setData)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
