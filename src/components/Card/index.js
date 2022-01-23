import React from "react";

/**
 * Card component
 */
class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile">
        <div className="image">
    	    <img src={profile.avatar_url} />
        </div>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    )
  }
}

export default Card;
