import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Assign a unique key prop to each Article
          title={post.title}
          content={post.content}
        />
      ))}
    </main>
  );
};

export default ArticleList;