import React from 'react';

import Card from '../Card';

const CardList = (props) => {
  // IMPORTANT !!! add key to component when using dynamically like using in this map function to avoid re-rendering, re-ordering, ... issues
  return (
    <div>
      {props.profiles.map((profile, index) => <Card {...profile} key={profile.id} />)}
    </div>
  )
};

export default CardList;
