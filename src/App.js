import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      mensagem: ''
    };
  }

  // Conjunto de palavras-chave e mensagens motivacionais
  mensagensMotivacionais = {
    sucesso: "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    coragem: "A coragem é a resistência ao medo, o domínio do medo – não a ausência do medo.",
    foco: "O foco é o segredo para conquistar seus sonhos.",
    persistencia: "Grandes coisas nunca vêm de zonas de conforto. Persista!",
    fé: "A fé é a certeza de que tudo dará certo no momento certo."
  };

  // Atualiza o valor de mensagem com base na palavra-chave digitada (arrow function)
  atualizarMensagem = (e) => {
    const valor = e.target.value.toLowerCase();
    this.setState({
      input: valor,
      mensagem: this.mensagensMotivacionais[valor] || "Digite uma palavra inspiradora..."
    });
  };

  render() {
    return (
      <div>
        <h2>Gerador de Mensagens Motivacionais</h2>
        <input
          type="text"
          placeholder="Digite uma palavra-chave..."
          value={this.state.input}
          onChange={this.atualizarMensagem} // Não precisa de bind, pois é uma arrow function
        /><br/>
        <p>{this.state.mensagem}</p>
      </div>
    );
  }
}

export default App;
