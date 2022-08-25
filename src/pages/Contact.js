import React from 'react';
import styled from 'styled-components';
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

const BoxContainer = styled.div`
  margin-top: 5em;
  display: block;
  font-weight: lighter;
  a{
      text-decoration: none;
      color: inherit;
      text-align: center;
  }
  div{
    background-color: ${props => props.theme.backgroundColor.tertiary};
    padding: 1em ;
    margin-bottom: 2em;
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;
    :hover{
      background-color: ${props => props.theme.backgroundColor.secondary};
      color: ${props => props.theme.color.secondary};
    }
  }
  div>img{
    display: block;
    margin: 0 auto;
  }
`;
const Icon = styled.img`
  width: 40px;
  filter: ${props => props.theme.name === "dark" ? 'invert()' : 'none'};
`;

const Filler = styled.div`
  width: 100%;
  height: 5em;
`;

function Contact({ refPassed }) {
  return (
    <Container ref={refPassed}>
      <Centerer>
        <Title>Contact</Title>
        <BoxContainer>
          <a href='https://linkedin.com/in/matiasguzlop' target="_blank" rel='noreferrer'>
            <div>
              <Icon src='icons/linkedin.svg'></Icon>
              linkedin.com/matiasguzlop
            </div>
          </a>
          <a href='https://github.com/matiasguzlop' target="_blank" rel='noreferrer'>
            <div>
              <Icon src="icons/github.svg"></Icon>
              github.com/matiasguzlop
            </div>
          </a>
          <a href='mailto:matiasguzlop@gmail.com'>
            <div>
              <Icon src="icons/email.svg"></Icon>
              matiasguzlop@gmail.com
            </div>
          </a>
          <a href='https://instagram.com/matiasguzlop' target="_blank" rel="noreferrer">
            <div>
              <Icon src='icons/ig.svg'></Icon>
              instagram.com/matiasguzlop
            </div>
          </a>
        </BoxContainer>
        <Filler></Filler>
      </Centerer>
    </Container>
  );
}

export default Contact;