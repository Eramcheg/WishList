import React from 'react';

function WishItem(properties) {
  return (
    <div>
      <h2>{properties.title}</h2>
      <p>{properties.description}</p>
      <button onClick={()=>properties.onDelete(properties.id)}>Delete</button>
    </div>
  );
}

export default WishItem;
