import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeContextProps = {
  isDay: boolean;
  toggleDayNight: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    document.body.className = isDay ? 'body-day-mode' : 'body-night-mode';
  }, [isDay]);

  const toggleDayNight = () => setIsDay(!isDay);

  return (
    <ThemeContext.Provider value={{ isDay, toggleDayNight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
