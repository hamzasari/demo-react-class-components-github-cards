import React from "react";

/**
 * Card component
 */
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <div className="image">
    	    <img src="https://via.placeholder.com/75" />
        </div>
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
    	</div>
    )
  }
}

export default Card;
