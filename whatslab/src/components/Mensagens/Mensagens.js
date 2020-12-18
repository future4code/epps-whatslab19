import React from 'react'
import './Mensagens.css'

class Mensagens extends React.Component {

    render () {

        return (
                <p>{this.props.nomeUsuario}: {this.props.mensagemPostada}</p>
        );
    }
}

export default Mensagens