export const getArrayFromLocalStorage = async (key: string) => {
  try {
    const data = await localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error fetching data from localStorage:", err);
    return [];
  }
};

export const setArrayFromLocalStorage = (key: string, data: any[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error("Error setting data to localStorage:", err);
  }
};
