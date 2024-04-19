import React, { Suspense } from 'react';
import { JogosProvider } from './JogosContext';
import BuscadorDeJogos from './BuscadorDeJogos';

const LazyResultadosBusca = React.lazy(() => import('./ResultadosBusca'));

function App() {
  return (
    <JogosProvider>
      <div>
        <BuscadorDeJogos />
        <Suspense fallback={<div>Carregando resultados...</div>}>
          <LazyResultadosBusca />
        </Suspense>
      </div>
    </JogosProvider>
  );
}

export default App;