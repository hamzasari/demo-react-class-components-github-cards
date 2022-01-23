import React from 'react';

import Card from './components/Card';

import './App.css';

/**
 * App component
 */
class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='header'>{this.props.title}</div>
        <Card />
      </div>
    )
  }
}

export default App;
