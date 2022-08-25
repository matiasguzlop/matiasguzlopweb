import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import styled from 'styled-components';

const ANIMATION_PERIOD = 5;
const BOX_SIZE = 40;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  div{
    background-color: ${props => props.theme.color.tertiary};
    width: ${BOX_SIZE}px;
    height: ${BOX_SIZE}px;
    position: fixed;
    bottom: -${BOX_SIZE}px;
    opacity: 0.05;
    animation-name: rising;
    animation-timing-function:linear ;
    animation-iteration-count: infinite ;
    @keyframes rising {
      0%{
        transform: translateY(0);
        opacity: 0.05
      }
      100%{
        transform: translateY(-100vh) rotate(100deg);
        opacity: 0;
      }
    }
  }
`;


function AnimatedBg({ numberOfElements }) {
    const wSize = useWindowSize();
    const baseArray = [...Array(numberOfElements)];
    const xPositions = baseArray.map((i) =>
        Math.floor(Math.random() * wSize.width / (BOX_SIZE))  * BOX_SIZE
    );
    const xPositionsSet = [...new Set(xPositions)];
    const delays = baseArray.map(i =>
        Math.floor(Math.random() * ANIMATION_PERIOD)
    );
    const durations = baseArray.map(i =>
        ANIMATION_PERIOD + Math.floor((10 * (Math.random() - 0.5))) / 10
    );
    const elements = xPositionsSet.map((xPos, index) => (
        {
            delay: delays[index],
            duration: durations[index],
            xPos: xPos
        }
    ));
    return (
        <Container>{
            elements.map(el => <div
                key={el.xPos}
                style={{
                    left: `${el.xPos}px`,
                    animationDelay: `${el.delay}s`,
                    animationDuration: `${el.duration}s`
                }}></div>)
        }
        </Container >
    );
}

export default AnimatedBg;