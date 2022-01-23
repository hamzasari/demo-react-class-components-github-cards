import React from 'react';

import CardList from './components/CardList';

import './App.css';
import Form from './components/Form';

/**
 * App component
 */
class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='header'>{this.props.title}</div>
        <Form />
        <CardList />
      </div>
    )
  }
}

export default App;
