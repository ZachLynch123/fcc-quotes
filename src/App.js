import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      colors: ['#000033', '#696969', 
        '#c0ffee', '#b7410e', '#4d3c63']
    }
  }
  

  componentDidMount() {
 
    Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => {
        const quoteArray = res.data.quotes;
        this.setState({
          quotes: quoteArray
        });
        console.log(this.state.quotes)
      })
        
  }

  randomQuote = (x) => {
    return this.state.quotes[x];
  }

  randomColor = (x) => {
    return this.state.colors[x];
  }

  handleNewQuote = () => {
   return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length) + 1];
  }

  handleNewColor = () => {
    return this.state.colors[Math.floor(Math.random() * this.state.colors.length) + 1];
  }

  render() {
    let x = 1;
    return (
      <div className="App">
        <Card quote={this.handleNewQuote()} color={this.handleNewColor()} />
      </div>
    );
  }
}

export default App;
