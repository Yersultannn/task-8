// src/App.js
import React from 'react';
import AddAdForm from './AddAdForm';
import AdList from './AdList';
import './styles.css';

function App() {
  return (
      <div>
        <h1>доска для добавление</h1>
        <AddAdForm />
        <AdList />
      </div>
  );
}

export default App;

