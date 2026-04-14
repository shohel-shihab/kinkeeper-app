import { createContext, useState } from "react";
export const AppContext =createContext();
const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEvent = (type, name) => {
    const event = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString()
    };

    setTimeline(prev => [event, ...prev]);
  };

  return (
    <AppContext.Provider value={{ timeline, addEvent }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;