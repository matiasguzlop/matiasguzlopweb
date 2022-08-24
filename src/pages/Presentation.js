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
  max-width: 80%;
  min-width: 50%;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80px 1fr;
  align-items: center;
  &>div{
    margin-left: 1em;
  }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
  filter: grayscale(0%);
  grid-column: 1/2;
`;

const PreTitle = styled.h4`
  margin: 0;
  width: 100%;
  grid-column: 2/3;
  grid-row: 1/2;
  `;

const Title = styled.h1`
  width: 100%;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 0;
  color: ${props => props.theme.color.tertiary};
  `;

const SubTitle = styled.h2`
color: ${props => props.theme.color.tertiary};
`;

const Drop = styled.p`
  font-weight: lighter;
  color: ${props => props.theme.color.tertiary};
`;

function Presentation() {
  return (
    <Container>
      <Centerer>
        <TitleContainer>
          <Img src='img/mati2.png'></Img>
          <div>
            <PreTitle>Hi, my name is</PreTitle>
            <Title>Matías Guzmán</Title>
          </div>
        </TitleContainer>
        <SubTitle>I'm full stack developer</SubTitle>
        <Drop>
          I have 4 years experience working as freelancer for industrial companies,
          mainly building real time data aquisition systems and user interfaces.
        </Drop>
        <GoDownButton text="More about me">
        </GoDownButton>
      </Centerer>
    </Container>
  );
}

export default Presentation;