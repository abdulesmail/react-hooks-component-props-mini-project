import React from 'react';

const Article = ({ title, content, key }) => {
  return (
    <article key={key}>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Article;
