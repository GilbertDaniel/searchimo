import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448',
      },
    });

    const data = await res.json();
    console.log(data);
    if(url.includes('/news')){
      setResults(data.entries)
    }else if(url.includes('/image')){
      setResults(data.image_results)
    }else{
      setResults(data.results)
    }

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);