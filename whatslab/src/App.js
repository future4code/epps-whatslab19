import React from 'react';
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

  pressionarEnter = (event) => {
    if (event.key === "Enter") {
      this.adicionarMensagem()
    }
}

removerTodaMensagem = (indiceTodaMsn) => {
  if (window.confirm("Deseja remover esta mensagem?")) {
    const mensagemRemovida = this.state.mensagens;
    mensagemRemovida.splice(indiceTodaMsn, 1);

    this.setState({
      mensagens: mensagemRemovida
    });
  }
}

  render() {

    const mensagemComponentes = this.state.mensagens.map((item) => {
      if (item.nomeUsuario === "") {
        return (
          <div>
            <p onDoubleClick= {this.removerTodaMensagem}>{item.mensagem}</p>
          </div>
        );
      }
      return (
        <div>
          <p onDoubleClick= {this.removerTodaMensagem}>
            <strong>{item.nomeUsuario}:</strong> {item.mensagemPostada}
          </p>
        </div>
      );
    });


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
            onKeyDown={this.pressionarEnter}
            placeholder={"Digite a mensagem!"}
            className={'mensagem-campo'}
          />
          <button onClick={this.adicionarMensagem} className={'button-enviar'}>
            Enviar
          </button>

        </div>

      </div>

    );
  }
}

export default App;