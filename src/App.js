import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Presentation from './pages/Presentation';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import darkTheme from './styles/darkTheme';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor.primary};
  color: ${props => props.theme.color.primary};
  min-height: 100vh;
  font-weight: bold;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header></Header>
        <Presentation></Presentation>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </Container>
    </ThemeProvider>
  );
}

export default App;
