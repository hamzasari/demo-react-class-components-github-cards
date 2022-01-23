import React from 'react';

import CardList from './components/CardList';
import Form from './components/Form';

import './App.css';

/**
 * App component
 */
class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState => ({
      profiles: [...prevState.profiles, profileData],
    })))
  };
  
  render() {
    return (
      <div className='page'>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;
