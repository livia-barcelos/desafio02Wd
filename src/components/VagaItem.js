import React from 'react';

const VagaItem = ({ vaga }) => {
  return (
    <li>
      {vaga.placa} - {vaga.proprietario} - {vaga.apartamento}/{vaga.bloco} - {vaga.modelo} - {vaga.cor} - Vaga {vaga.numeroVaga}
    </li>
  );
};

export default VagaItem;
