//Am ripping this entirely from fireship's code
//will comment to improve understanding
import { useEffect, useState } from "react";

//retrieve default settings that may be in browser, to be used as a default state
const useLocalStorage = (key, initialValue) => {
  //useState returns a value to be stored (from localstorage or initial value) and a function to set a new value later
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;        //if key exists in local storage, return item held within (otherwise initialValue)
    } catch (error) {
        console.log(error);
        return initialValue;
    }
  });

  //allows updating of the stored value, either by applying a function or supplying a new value
  //sets localstorage value to updated value
  //is same as useState's generated setStoredValue func, but updates localstorage
  const setValue = (value) => {
    try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, valueToStore);
    } catch (error) {
        console.log(error);
    }
  }
  return [storedValue, setValue];
};

//returns users default dark mode preference
const getInitialDarkMode = () => {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//uses or removes dark custom variant every time dark theme state in localstorage is changed
const useDarkMode = () => {
  const [isEnabled, setEnabled] = useLocalStorage('dark-theme', getInitialDarkMode);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isEnabled]);

  return [isEnabled, setEnabled];
};

export default useDarkMode;