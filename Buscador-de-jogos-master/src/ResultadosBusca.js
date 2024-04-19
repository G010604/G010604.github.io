import React from 'react';
import { useJogosContext } from './JogosContext';
import Typography from '@mui/material/Typography';

function ResultadosBusca() {
  const { jogos, loading, error } = useJogosContext();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {jogos.map(jogo => (
        <div key={jogo.id}>
          <img src={jogo.background_image} alt={jogo.name} style={{ maxWidth: "200px", maxHeight: "200px" }} />
          <Typography variant="body1">{jogo.name} - Plataformas: {jogo.platforms.map(plataforma => plataforma.platform.name).join(", ")}</Typography>
        </div>
      ))}
    </div>
  );
}

export default ResultadosBusca;