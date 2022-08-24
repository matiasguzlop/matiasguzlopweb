import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from './icons/ChevronDown.tsx';
import MainButton from './MainButton'

const Button = styled(MainButton)`
  display: block;
  margin: 5em auto;
    &>i{
      margin: 0 auto;
      position: relative;
      animation: floating alternate infinite 0.5s ease-in-out;
      @keyframes floating {
        0%{
          transform: translateY(6px);
        };
        100%{
          transform: translateY(0px);
        }
      }
    }
`;

function GoDownButton(props) {
    return (
        <Button {...props}>
            {props.text}
            <ChevronDown></ChevronDown>
        </Button>
    );
}

export default GoDownButton;