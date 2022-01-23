import React from "react";

/**
 * Card component
 */
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <div className="image">
    	    <img src={this.props.profile.avatar_url} />
        </div>
        <div className="info">
          <div className="name">{this.props.profile.name}</div>
          <div className="company">{this.props.profile.company}</div>
        </div>
    	</div>
    )
  }
}

export default Card;
