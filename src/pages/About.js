import React from 'react';
import styled from 'styled-components';
import GoDownButton from '../components/GoDownButton';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Centerer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  min-width: 50%;`;

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

function About() {
  return (
    <Container>
      <Centerer>
        <Title>About me</Title>
        <List>
          <li>
            <div>🎓</div>University graduated Civil Electronic Engineer from Universidad de La Frontera, Temuco, Chile.
          </li>
          <li>
            <div>⚙️</div>I started building data monitoring systems for industrial companies from hardware to software, designing electronic circuit boards, programming microcontrollers, managing data servers and building UI.
          </li>
          <li>
            <div>👨‍💻</div>From that experience, i have became more intrested in software development and found a great field in wich i have been delving: Constantly been learning new technologies and adopting good practices in my work.
          </li>
          <li>
            <div>📈</div>I'm a lover of challenges and learning, always trying to do my best on the things i work on.
          </li>
          <li>
            <div>🎾</div>Sportsman, sociable and good interpersonal skills.
          </li>
        </List>
        <h4>Technologies i have been working with recently:</h4>
        <TechsBox>
          <li>JavaScript ES6+</li>
          <li>React</li>
          <li>CSS</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>MongoDB</li>
        </TechsBox>
        <GoDownButton text="Checkout what i have built"></GoDownButton>
      </Centerer>
    </Container>
  );
}

export default About;