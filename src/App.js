import React from 'react';

import CardList from './components/CardList';
import Form from './components/Form';

import './App.css';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

/**
 * App component
 */
class App extends React.Component {
  state = {
    profiles: testData,
  };
  render() {
    return (
      <div className='page'>
        <div className='header'>{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;
