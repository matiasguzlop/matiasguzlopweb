import styled, { ThemeProvider } from "styled-components";
import Presentation from './pages/Presentation';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import darkTheme from './themes/darkTheme';

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
        <Presentation></Presentation>
        <About></About>
        <Experience></Experience>
        <Contact></Contact>
      </Container>
    </ThemeProvider>
  );
}

export default App;
