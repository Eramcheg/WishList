import React, { useState } from 'react';
import WishItem from "./WishItem";
import './WishList.css';
function WishList() {
    const [items, setItems] = useState([
      { id: 1, title: 'New Laptop', description: 'A powerful laptop for programming' },
      { id: 2, title: 'Guitar', description: 'An acoustic guitar for learning music' },
      { id: 3, title: 'Travel Backpack', description: 'A sturdy backpack for travel' },
    ]);

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const [searchQuery, setSearchQuery] = useState('');

    const handleAddItem = (e) => {
      e.preventDefault();

      // Создаем новый элемент
      const newItem = {
        id: items.length + 1,
        title: newTitle,
        description: newDescription,
      };

      // Обновляем список элементов
      setItems([...items, newItem]);

      // Очищаем форму
      setNewTitle('');
      setNewDescription('');
    };

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
      <div className="wishlist">
          <h1>My wishlist</h1>
          <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <form onSubmit={handleAddItem}>
              <input
                  type="text"
                  placeholder="Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
              />
              <button type="submit">Add Item</button>
          </form>
          {filteredItems.map(item => (
              <div className={"wish-item"}>
                  <WishItem
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      onDelete={handleDeleteItem}
                  />
              </div>
          ))}
      </div>
  );
}

export default WishList;
