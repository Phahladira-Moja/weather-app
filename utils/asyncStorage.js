import AsyncStorage from "@react-native-async-storage/async-storage";

// store item
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.error("Error storing value: ", error);
  }
};

// get item
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
    console.error("Error retrieving value: ", error);
  }
};
