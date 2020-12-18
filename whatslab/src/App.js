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
        <div>{mensagemComponentes}</div>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeNovoNomeUsuario}
            placeholder={"Digite o nome do usuário!"}
          />
          <input
            value={this.state.valorInputNovaMensagem}
            onChange={this.onChangeNovaMensagem}
            placeholder={"Digite a nova mensagem!"}
          />
          <button onClick={this.adicionarMensagem}>Add Post</button>
        </div>

      </div>

    );
  }
}

export default App;
