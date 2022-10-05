import { createContext, useState } from "react";
import { default as horoscopesObj } from "../data/horoscopes.js";
export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Pisces");
  const sign = horoscopesObj[currentSign];
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
