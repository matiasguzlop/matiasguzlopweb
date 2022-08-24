import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Centerer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  min-width: 50%;
`;
const Title = styled.h1`
  text-align: center;
`;
const BoxContainer = styled.div`
  margin-top: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  font-weight: lighter;
  div{
    background-color: ${props => props.theme.backgroundColor.tertiary};
    padding: 1em;
    border-radius: 30px;
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
function Contact() {
  return (
    <Container>
      <Centerer>
        <Title>Contact</Title>
        <BoxContainer>
          <div>
            <Icon src='icons/linkedin.svg'></Icon>
            <span>
              linkedin.com/matiasguzlop
            </span>
          </div>
          <div>
            <Icon src="icons/github.svg"></Icon>
            <span>
              github.com/matiasguzlop
            </span>
          </div>
          <div>
            <Icon src="icons/email.svg"></Icon>
            <span>
              matiasguzlop@gmail.com
            </span>
          </div>
          <div>
            <Icon src='icons/ig.svg'></Icon>
            <span>
              instagram.com/matiasguzlop
            </span>
          </div>
        </BoxContainer>
      </Centerer>
    </Container>
  );
}

export default Contact;