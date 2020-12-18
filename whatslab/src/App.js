import React from 'react';
import Mensagens from './components/Mensagens/Mensagens'
import './App.css';

class App extends React.Component {
  state = {
    mensagens: []
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      mensagemPostada: this.state.valorInputNovaMensagem,
    }

    const novoArray = [...this.state.mensagens, novaMensagem]

    this.setState({ mensagens: novoArray })

  }

  onChangeNovoNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeNovaMensagem = (event) => {
    this.setState({ valorInputNovaMensagem: event.target.value })
  }

  render() {

    const mensagemComponentes = this.state.mensagens.map((item) => {
      return <Mensagens
        nomeUsuario={item.nomeUsuario}
        mensagemPostada={item.mensagemPostada}
      />
    })

    return (
      <div className={'mensagem-container'}>
        <p>WhatsLab</p>
        <div className={'mensagens-texto'}>{mensagemComponentes}</div>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeNovoNomeUsuario}
            placeholder={"Digite o nome do usuário!"}
            className={'mensagem-usuario'}
          />
          <input
            value={this.state.valorInputNovaMensagem}
            onChange={this.onChangeNovaMensagem}
            placeholder={"Digite a mensagem!"}
            className={'mensagem-campo'}
          />
          <button onClick={this.adicionarMensagem}>Enviar</button>
        </div>

      </div>

    );
  }
}

export default App;
