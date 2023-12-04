import { createContext, useContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('Arial');

  const toggleFont = () => {
    setFont((prevFont) => (prevFont === 'Arial' ? 'Verdana' : 'Arial'));
  };

  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  return useContext(FontContext);
};