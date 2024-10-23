import React, { useState } from 'react';

const CadastroReserva = () => {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    numeroVaga: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cadastro realizado com sucesso!');
    setFormData({
      placa: '',
      proprietario: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      numeroVaga: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="placa" placeholder="Placa" value={formData.placa} onChange={handleChange} required />
      <input name="proprietario" placeholder="Nome do Proprietário" value={formData.proprietario} onChange={handleChange} required />
      <input name="apartamento" placeholder="Número do Apartamento" value={formData.apartamento} onChange={handleChange} required />
      <input name="bloco" placeholder="Bloco" value={formData.bloco} onChange={handleChange} required />
      <input name="modelo" placeholder="Modelo do Veículo" value={formData.modelo} onChange={handleChange} required />
      <input name="cor" placeholder="Cor do Veículo" value={formData.cor} onChange={handleChange} required />
      <input name="numeroVaga" placeholder="Número da Vaga" value={formData.numeroVaga} onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroReserva;
