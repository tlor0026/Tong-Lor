import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
function App() {
  const [categories] = useState([
    {
      name: 'About me',
      description: "Welcome to my portfolio"
    },
    { name: "resume", description: <a href={require("../src/assets/file/resume.pdf")} download>
    <h4>Download my Resume</h4>
  </a>,},
    { name: "projects", description: <a href='url'>https://github.com/tlor0026</a>}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <div><Footer></Footer></div>
    </div>
  );

}

export default App;
