import { createContext, useState } from "react"

export const AuthContext = createContext();

const ThemeContext = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEvent = (type, name) => {
    const newEvent = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString()
    };
    setTimeline(prev => [newEvent, ...prev]);
  };

  return (
    <AuthContext.Provider value={{ timeline, addEvent }}>{children}</AuthContext.Provider>
  )
}

export default ThemeContext