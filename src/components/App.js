import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const App = () => {
  const blogName = "Underreacted";
  const aboutText = "A blog about learning React";
  const logoImageSrc = "./images";
  const posts = [
    {title:"Components 101", content: "Setting up the building blocks of your site"},
    {title: "React Data Flow", content: "Passing props is never passe"},
    {title: "Function vs Class components", content: "React, meet OOJS."},
  ]

  return (
    <div>
      <Header blogName={blogName} />
      <About imageSrc={logoImageSrc} aboutText={aboutText} />
      <ArticleList posts={posts} />
      
    </div>
  );
};

export default App;
