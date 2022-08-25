import React from 'react';
import styled from 'styled-components';
import { containerMaxWidth, sizeQueries } from '../styles/constants';

const Container = styled.div`
  margin: 0 auto;
  width: ${containerMaxWidth.sm};
  @media ${sizeQueries.md}{
    width: ${containerMaxWidth.md};
  }
  @media ${sizeQueries.lg}{
    width: ${containerMaxWidth.lg};
  }
`;

function Centerer({ children }) {
    return (
        <Container>{children}</Container>
    );
}

export default Centerer;