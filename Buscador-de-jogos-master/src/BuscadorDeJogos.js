import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useJogosContext } from './JogosContext';

function BuscadorDeJogos() {
  const { buscarJogos } = useJogosContext();
  const [nomeJogo, setNomeJogo] = useState('');

  const handleBuscar = () => {
    buscarJogos(nomeJogo);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Busca de Jogos</Typography>
      <TextField
        label="Digite o nome do jogo"
        variant="outlined"
        value={nomeJogo}
        onChange={e => setNomeJogo(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={handleBuscar}>Buscar</Button>
    </div>
  );
}

export default BuscadorDeJogos;