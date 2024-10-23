import React from 'react';
import VagaItem from './VagaItem';

const vagasFicticias = [
  { placa: 'ABC1234', proprietario: 'João', apartamento: '101', bloco: 'A', modelo: 'Fusca', cor: 'azul', numeroVaga: '1' },
  { placa: 'XYZ5678', proprietario: 'Maria', apartamento: '102', bloco: 'B', modelo: 'Civic', cor: 'preto', numeroVaga: '2' },
];

const ListarVagas = () => {
  return (
    <div>
      <h2>Vagas Cadastradas</h2>
      <ul>
        {vagasFicticias.map((vaga, index) => (
          <VagaItem key={index} vaga={vaga} />
        ))}
      </ul>
    </div>
  );
};

export default ListarVagas;
