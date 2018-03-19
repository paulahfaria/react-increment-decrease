import React, { Component } from 'react';
import './index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      clicks: 0,
      show: true
    }
  }

  Increase = () =>{
    this.setState({clicks: this.state.clicks + 1})
  }

  Decrease = () =>{
    this.setState({clicks: this.state.clicks - 1})
  }

  ToggleView = () =>{
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.show ? this.state.clicks : ''}</h2>
        <button className="button button--view" onClick={this.ToggleView}>{this.state.show ? 'Não mostrar contagem' : 'Mostrar contagem'}</button>
        <div className="button-container">
          <button className="button button--up" onClick={this.Increase}>Aumentar 1</button>
          <button className="button button--down" onClick={this.Decrease}>Diminuir 1</button>
        </div>
      </div>
    );
  }
}

export default App;
