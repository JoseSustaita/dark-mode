import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
export const useDarkMode = (dark) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeOn", dark);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode === true) {
      body.className = "dark-mode";
    } else {
      body.className = "";
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
