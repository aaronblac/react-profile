import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import ProjectSlider from './Components/ProjectSlider/ProjectSlider';
import Contact from './Components/Contact/Contact';
import SlideIn from './Components/SlideIn/SlideIn';

function App() {
  const [showSlideIn, setShowSlideIn] = useState(false);

  const handleShowSlideIn = () => {
    setShowSlideIn(true);
  };

  const handleCloseSlideIn = () => {
    setShowSlideIn(false);
  };
  return (
    <div className='App'>
      <SlideIn
        show={showSlideIn}
        onClose={handleCloseSlideIn} 
        pdfLink="/images/AaronBlackCV.pdf" 
      />
      <Header slideIn={handleShowSlideIn}></Header>
      <div id='about' className='section'>
        <div className='profile'>
          <div className='face'><img src='images/aaronFace.jpeg' alt='my face'/></div>
          <h2>Hello.</h2>
          <p>I have always believed in the philosophy of going after your dreams, despite the chances of achieving them or how difficult it might be. Nothing great has ever been accomplished in the history of the world without someone taking that first tiny step, that first risk or just asking that first question of “Can I achieve this?”. I am a Software Developer and Entrepreneur who is constantly learning new skills and am passionate about building my knowledge in all areas of my life, especially Software Development. It offers endless opportunities for personal growth and the adventure of gaining new knowledge that is evolving daily. I am dedicated to constantly growing my <a className='pj' href='#skills'>skill-set</a> and improving my code. Look below to see a few of my <a className='pj' href='#projects'>projects.</a> </p>
        </div>
      </div>
      <div id='projects' className='section'>
        <ProjectSlider></ProjectSlider>
      </div>
      <div id='skills' className='section'>
        <Skills></Skills>
      </div>
      <div id='contact' className='section'>
        <Contact></Contact>
      </div>
      <Footer slideIn={handleShowSlideIn}></Footer>
    </div>
  );
}

export default App;
