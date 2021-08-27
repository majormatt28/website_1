import React from 'react';
import Blogs from './Blogs';
import AboutMe from './AboutMe';
import Header from './Header'

import projects from "../data/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Blogs />
      <AboutMe />
    </div>
  );
}

export default App;
