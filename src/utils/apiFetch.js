export const fetchData = async (url, key, setStateFunction, params = {}) => {
  const check = localStorage.getItem(key);

  if (check) {
    setStateFunction(JSON.parse(check));
  } else {
    try {
      const res = await fetch(url, params);
      const data = await res.json();
      localStorage.setItem(key, JSON.stringify(data));
      setStateFunction(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  }
};
