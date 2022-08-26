import React from 'react';
import styled from 'styled-components';
import GoDownButton from '../components/GoDownButton';
import Centerer from '../components/Centerer';
import { headerHeight } from '../styles/constants';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${headerHeight};
`;

const Title = styled.h1`
  text-align: center;
`;

const List = styled.ul`
  font-weight: lighter;
  color: ${props => props.theme.color.tertiary};
  &>li{
    margin-bottom: 0.5em;
    list-style: none;
    div{
      display: inline-block;
      margin-left: -2.2em;
      margin-right: 1em;
      font-style:none ;
    }
  }
`;

const TechsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 0.5em;
  color: ${props => props.theme.color.tertiary};
  &>li{
    transition: background-color 0.2s ease-in-out;
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: ${props => props.theme.backgroundColor.tertiary};
    padding: 0.5em 0;
    border-radius: 20px;
    :hover{
      color: ${props => props.theme.color.secondary};
      background-color: ${props => props.theme.backgroundColor.secondary};
    }
  }
`;

function About({ refPassed, handleScrollToSection }) {
  return (
    <Container ref={refPassed}>
      <Centerer>
        <Title>About me</Title>
        <List>
          <li>
            <div>🎓</div>University graduated Electronic Engineer from Universidad de La Frontera, Temuco, Chile 🇨🇱.
          </li>
          <li>
            <div>⚙️</div>I started building data monitoring systems for industrial companies, working on hardware and software, designing electronic circuit boards, programming microcontrollers, managing data servers and building UI.
          </li>
          <li>
            <div>👨‍💻</div>From that experience, i became more interested in software development and found a great field in which i have been delving.
          </li>
          <li>
            <div>📈</div>I'm a lover of challenges and learning, always trying to do my best on the things i work on. Constantly learning new technologies and adopting good practices in my work.
          </li>
          <li>
            <div>🎾</div>Sportsman, sociable with good interpersonal skills.
          </li>
        </List>
        <h4>Technologies i've been working with recently:</h4>
        <TechsBox>
          <li>JavaScript ES6+</li>
          <li>React</li>
          <li>CSS</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>MongoDB</li>
        </TechsBox>
        <GoDownButton
          text="Checkout what i've built"
          onClick={() => handleScrollToSection("projects")}
        ></GoDownButton>
      </Centerer>
    </Container>
  );
}

export default About;