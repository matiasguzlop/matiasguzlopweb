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
  width: 90%;
`;

const Title = styled.h1`
  text-align: center;
`;

const Entry = styled.div`
  border: 1px dashed ${props => props.theme.color.primary};
  margin-bottom: 1em;
  border-radius: 20px;
  padding: 0 1em;
  color: ${props => props.theme.color.tertiary};
  &>h2{
    margin-top: 1em ;
    margin-bottom: 0;
    span{
      font-size: 1em !important;
    }
  }
  &>h5{
    margin: 0.2em 0;
    color: ${props => props.theme.color.primary};
  }
  &>p{
    font-weight: lighter;
    margin-bottom: 2.5em;
    margin-top: 0.5em;
  }
`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

function Projects() {
  return (
    <Container>
      <Centerer>
        <Title>Proyects</Title>
        <Entry>
          <Link href='https://github.com/matiasguzlop/chooseone' target="_blank"><h2>ChooseOne.me <span>🔗</span></h2></Link>
          <h5>Personal open source project - Under development</h5>
          <p>
            asasdasldjaasdasd
            asd qoikalsd
            asdklqnweqkwen
          </p>
        </Entry>
        <Entry>
          <Link href='https://github.com/matiasguzlop/trainerscheduler' target="_blank"><h2>TrainerScheduler 🔗</h2></Link>
          <h5>Personal project - Under development</h5>
          <p>
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
          </p>
        </Entry>
        <Entry>
          <h2>Firmware Updater</h2>
          <h5>TEDI SpA</h5>
          <p>
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
          </p>
        </Entry>
        <Entry>
          <h2>Line availability KPI</h2>
          <h5>Frigosorno S.A.</h5>
          <p>
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
            asdiqhweiojalksdqwe
          </p>
        </Entry>
        <Entry>
          <h2>Whatsapp Tickets system</h2>
          <h5>Frigosorno S.A.</h5>
          <p>qklwejasdn qwiejaklsd qiwlejkasdoq wuejlk</p>
        </Entry>
        <Entry>
          <h2>Weights monitoring for grapes packing plant</h2>
          <h5>Provalle </h5>
          <p>qklwejasdn qwiejaklsd qiwlejkasdoq wuejlk</p>
        </Entry>
        <Entry>
          <h2>SCADA system</h2>
          <h5>Frigosorno S.A.</h5>
          <p>qklwejasdn qwiejaklsd qiwlejkasdoq wuejlk</p>
        </Entry>
        <Entry>
          <Link href='#'>
            <h3>Checkout my PDF resume ⬇️</h3>
          </Link>
        </Entry>
        <GoDownButton text="Contact me!"></GoDownButton>
      </Centerer>
    </Container>
  );
}

export default Projects;