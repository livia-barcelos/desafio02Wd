import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroReserva from './components/CadastroReserva';
import ListarVagas from './components/ListarVagas';

function App() {
  return (
    <Router>
      <div>
        <h1>Controle de Estacionamento</h1>
        <Switch>
          <Route path="/" exact component={CadastroReserva} />
          <Route path="/listar" component={ListarVagas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
