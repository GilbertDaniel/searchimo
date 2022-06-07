import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setLoading(true);
    
        const res = await fetch(`${baseUrl}${type}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448',
          },
        });
    
        const data = await res.json();
    
        setResults(data);
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
             {children}
        </ResultContext.Provider>
    ) 
}

export const useResultContext = () => useContext(ResultContext);