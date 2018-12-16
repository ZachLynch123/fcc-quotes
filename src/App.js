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
        '#c0ffee', '#b7410e', '#4d3c63'],
      quoteIndex: 1,
      colorIndex: 1,
      isloaded: false
    }
  }
  

  componentDidMount() {
 
    Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => {
        const quoteArray = res.data.quotes;
        console.log(quoteArray[0])
        this.setState({
          quotes: quoteArray,
          isloaded: true
        });
      })
        
  }

  handleNew = () => {
    this.setState({
      quoteIndex: Math.floor(Math.random() * this.state.quotes.length),
      colorIndex: Math.floor(Math.random() * this.state.colors.length)
    })
    
  }

  render() {
    let { colors, colorIndex, quotes, quoteIndex, isloaded } = this.state;
    if(isloaded){
    return (
      <div className="App" style={{backgroundColor: `${colors[colorIndex]}`}}>
        <Card data={quotes[quoteIndex]} colors={colors[colorIndex]} />
        <button onClick={this.handleNew}>click meh</button>
      </div>
    );
  } else {
    return(
      <h1>hi</h1>
    )
  }
}
}

export default App;
