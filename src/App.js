import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { directive } from '@babel/types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
