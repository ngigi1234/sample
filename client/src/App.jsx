import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArticles(data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>
            <button>Delete</button>
            <button>update</button>
            <button>Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
