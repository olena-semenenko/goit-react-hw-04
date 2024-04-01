import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  // logic function to handle search bar input

  const handleSubmit = e => {
    e.preventDefault();
    if (userInput) {
      const userSearch = userInput.toLocaleLowerCase();

      onSubmit(userSearch);
    } else {
      toast.error('Please enter a search value.');
    }
  };

  // logic for the search bar
  const [userInput, setUserInput] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <header className="css.header">
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={userInput}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
