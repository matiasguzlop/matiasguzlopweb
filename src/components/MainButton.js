import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.theme.backgroundColor.primary};
    color: ${props => props.theme.color.primary};
    border: solid 1px;
    transition: 0.2s;
    border-radius: 20px;
    padding: 1em 2em;
    font-size: 1em;
    width: 100%;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.color.secondary};
        background-color: ${props => props.theme.backgroundColor.secondary};
    }
`;

function MainButton(props) {
    return (
        <Button {...props}></Button>
    );
}

export default MainButton;