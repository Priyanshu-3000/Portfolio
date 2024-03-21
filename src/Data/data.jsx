import React, { createContext, useState } from "react"; // Correct import

export const BoxDataContext = createContext();


export const BoxDataProvider = ({ children }) => {
  // Renamed from boxdataprovider to BoxDataProvider
  const [boxdata, setboxdata] = useState(box);

  return (
    <BoxDataContext.Provider value={{ boxdata, setboxdata }}>
      {children}
    </BoxDataContext.Provider>
  );
};
