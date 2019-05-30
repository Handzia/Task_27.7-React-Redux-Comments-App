import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      
      <DevTools />
    </div>
  );
};

export default App;
