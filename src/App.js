import React from 'react';

import CardList from './components/CardList';

import './App.css';

/**
 * App component
 */
class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='header'>{this.props.title}</div>
        <CardList />
      </div>
    )
  }
}

export default App;
