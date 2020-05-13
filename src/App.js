import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Ingresar Producto"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Agregar</button>
          </form>
        </header>
      </div>
    )
  }
}
export default App;