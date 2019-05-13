import React, { Component } from 'react';
import Page from '../components/page';
import fetch from 'isomorphic-unfetch';

class Home extends Component {
  state = {
    ai: this.props.ai
  }

  // Atualiza desenho a cada segundo
  componentDidMount(){

    window.scrollTo({
        top: document.querySelector('.pins block:last-child').offsetTop - 200,
        left: document.querySelector('.pins block:last-child').offsetleft - 100,
        behavior: "smooth"
    });

    setInterval( () => {
      this.getAi();
    }, 1000);
  }

  // Pega desenho atualizado
  getAi = async () => {
    const desenhoFetch  = await fetch(`http://${window.location.host}/static/pins.html`);
    const desenhoData   = await desenhoFetch.text();

    this.setState({
      ai: desenhoData
    });
  }

  render(){
    return (
      <Page>
        <div className="pins" dangerouslySetInnerHTML={{__html:this.state.ai}} />
        <span className="footer">
          Desenho iniciado no dia 13/05/2019 por um <strong>AI</strong>, ele irá desenhar 24hs por dia, 7 dias por semana, durante 1 ano, cada cor representa 1 dia. Término em: 13/05/2020.
        </span>
      </Page>
    )
  }
}

// Inicia em tela o desenho
Home.getInitialProps = async ({ req }) => {
  
  // Pega os dados do HOST
  let host = req ? req.headers.host : window.location.hostname;

  // Pega o desenho
  const desenhoFetch  = await fetch(`http://${host}/static/pins.html`);
  const desenhoData   = await desenhoFetch.text();

  return { "ai": desenhoData };
}

export default Home;