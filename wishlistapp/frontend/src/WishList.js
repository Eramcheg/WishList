import React from 'react';
import WishItem from "./WishItem";
import './WishList.css';
function WishList() {
    const items = [
      { id: 1, title: 'New Laptop', description: 'A powerful laptop for programming' },
      { id: 2, title: 'Guitar', description: 'An acoustic guitar for learning music' },
      { id: 3, title: 'Travel Backpack', description: 'A sturdy backpack for travel' },
    ];
  return (
    <div className="wishlist">
      {items.map(item => (
          <div className={"wish-item"}>
            <WishItem key={item.id} title={item.title} description={item.description} />
          </div>
        ))}
    </div>
  );
}

export default WishList;
