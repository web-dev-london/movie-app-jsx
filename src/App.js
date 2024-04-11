import './App.css';
import Movies from './components/movies';

import React, { Component } from 'react';

class App extends Component {
  /* Life cycle hooks 
   Mounting phase
  */
  constructor() {
    super();
    console.log('app - constructor');
  }

  componentDidMount() {
    console.log('app - mounted ');
  }

  render() {
    console.log('app - rendered');
    return (
      <>
        <main className='container'>
          <Movies />
        </main>
      </>
    );
  }
}

export default App;
