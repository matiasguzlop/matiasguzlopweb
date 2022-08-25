import React from 'react';
import styled from 'styled-components';
import GoDownButton from '../components/GoDownButton';
import ProjectEntry from '../components/ProjectEntry';
import { containerMaxWidth, headerHeight, sizeQueries } from '../styles/constants';
import projectsList from '../data/projectsList';

const Container = styled.div`
  min-height: 100vh;
  padding-top: ${headerHeight};
`;

const Title = styled.h1`
  text-align: center;
`;

const CustomCenterer = styled.div`
  margin: 0 auto;
  width: ${containerMaxWidth.sm};
`;

const ProyectsContainer = styled.div`
  display: grid;
  grid-template-columns: auto ;
  @media ${sizeQueries.md} {
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr)) ;
  }
  grid-template-rows: auto;
  gap: 1em;
`;

function Projects({ refPassed, handleScrollToSection }) {
  return (
    <Container ref={refPassed}>
      <CustomCenterer>
        <Title>Proyects</Title>
        <ProyectsContainer>
          {projectsList.map(project => <ProjectEntry key={project.title}>{project}</ProjectEntry>)}
        </ProyectsContainer>
        <ProjectEntry resumeLink={true}></ProjectEntry>
        <GoDownButton
          text="Contact me!"
          onClick={() => handleScrollToSection("contact")}
        ></GoDownButton>
      </CustomCenterer>
    </Container >
  );
}

export default Projects;