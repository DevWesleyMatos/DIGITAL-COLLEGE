import React from 'react';
import { createRoot } from 'react-dom/client';

function MeuComponente() {
  function mensagem() {
    alert("AHUHAUHUHAUHAUH");
  }

  return <button onClick={mensagem}>Clique</button>;
}

const root = createRoot(document.getElementById('root'));
root.render(<MeuComponente />);
