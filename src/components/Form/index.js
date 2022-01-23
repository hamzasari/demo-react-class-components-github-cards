import React from "react";

import axios from "axios";

/**
 * Form component
 */
class Form extends React.Component {
  state = {
    userName: '',
  };
  handleSubmit = async (event) => {
    // prevent default event to prevent page reload
    event.preventDefault();

    // get data from github api
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    
    // invoke onSubmit handler with data
    this.props.onSubmit(response.data);

    // empty the input field after getting data
    this.setState({ userName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
      </form>
    )
  }
};

export default Form;
