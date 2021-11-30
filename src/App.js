import React from 'react';
import { useEffect, useState } from 'react';
import { getPosts } from './contentful/utilities';
import './App.css';

const App = () => {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const data = getPosts();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
