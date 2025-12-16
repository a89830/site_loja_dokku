import React, { useState } from 'react';

export default function Reservar() {
  const [email, setEmail] = useState('');
  const [item, setItem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, item, descricao });
    setEnviado(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Reservar/Agendar</h1>
      {enviado ? (
        <p>Obrigado! Recebemos a sua solicitação.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Item:</label><br />
            <input type="text" value={item} onChange={e => setItem(e.target.value)} required />
          </div>
          <div>
            <label>Explicação:</label><br />
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
