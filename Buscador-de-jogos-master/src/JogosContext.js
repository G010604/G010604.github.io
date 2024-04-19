import React, { createContext, useState, useContext } from 'react';

const JogosContext = createContext();

export const useJogosContext = () => useContext(JogosContext);

export const JogosProvider = ({ children }) => {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarJogos = async (nomeJogo) => {
    try {
      setLoading(true);
      const apiKey = 'd209e82699274d69bc9dc1012f9b73b7';
      const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(nomeJogo)}&key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao buscar jogos');
      }
      const data = await response.json();
      setJogos(data.results);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JogosContext.Provider value={{ jogos, loading, error, buscarJogos }}>
      {children}
    </JogosContext.Provider>
  );
};

export default JogosContext;