import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Presentation from './pages/Presentation';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import darkTheme from './styles/darkTheme';
import AnimatedBg from "./components/AnimatedBg";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor.primary};
  color: ${props => props.theme.color.primary};
  min-height: 100vh;
  font-weight: bold;
  z-index: -2;
  position: relative;
`;

const Footer = styled.div`
    text-align: center;
  span{
    color: ${props => props.theme.color.tertiary};
    font-weight: lighter;
    font-size: 0.8em;
    display: block;
    opacity: 0.5;
  }
  a{
    color: inherit;
  }
`;

function App() {
  const toGoElementsRefs = {
    "matias": useRef(),
    "about": useRef(),
    "projects": useRef(),
    "contact": useRef()
  };

  const handleScrollToSection = (toGoElement) => {
    const element = toGoElementsRefs[toGoElement].current;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <AnimatedBg numberOfElements={30}></AnimatedBg>
        <Header
          handleScrollToSection={handleScrollToSection}
        ></Header>
        <Presentation
          handleScrollToSection={handleScrollToSection}
          refPassed={toGoElementsRefs["matias"]}
        ></Presentation>
        <About
          handleScrollToSection={handleScrollToSection}
          refPassed={toGoElementsRefs["about"]}
        ></About>
        <Projects
          handleScrollToSection={handleScrollToSection}
          refPassed={toGoElementsRefs["projects"]}
        ></Projects>
        <Contact
          refPassed={toGoElementsRefs["contact"]}
        ></Contact>
        <Footer>
          <span>
            Built by Matías Guzmán using React and Styled-Components
          </span>
          <span>
            Checkout the source <a href='https://github.com/matiasguzlop/matiasguzlopweb' target="_blank" rel="noreferrer">here</a>
          </span>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
