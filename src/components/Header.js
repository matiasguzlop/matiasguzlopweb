import React, { useState } from 'react';
import styled from 'styled-components';
import { headerHeight } from '../styles/constants';
import { MenuLeft } from './icons/MenuLeft.tsx';

const Container = styled.div`
    width: 100%;
    height: ${headerHeight};
    padding: 0.5em 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 30px -10px ${props => props.theme.backgroundColor.secondary};
    position: fixed;
    background-color: none;
    z-index: 1;
    backdrop-filter: blur(8px);
    `;

const MenuIcon = styled(MenuLeft)`
    display: inline-block;
    margin: 1em;
    `;

const MenuContent = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: absolute;
    left:0;
    top: ${headerHeight};
    list-style: none;
    background-color: ${props => props.theme.backgroundColor.primary};
    color: ${props => props.theme.color.tertiary};
    max-width: 60vw;
    width: fit-content;
    overflow: hidden;
    transition: height 0.2s ease-out;
    height: 0px;
    padding: 0;
    font-weight: lighter;
    &>li{
        padding: 1em;
        width: 100%;
        opacity: 0;
        transition: opacity 0.4s ease-out;
        cursor: pointer;
        :hover{
            color: ${props => props.theme.color.secondary};
            background-color: ${props => props.theme.backgroundColor.secondary};
        }
    }
    &.deployed{
        height: 200px;
        li{
            opacity: 1;
        }
    }
`;

const MenuIconContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    :hover{
                background-color: ${props => props.theme.backgroundColor.secondary};
                color: ${props => props.theme.color.secondary};
    }

`;

const Title = styled.h2`
    margin: 0 0.5em;
    text-transform: capitalize;
    font-weight: lighter;
    color: ${props => props.theme.color.tertiary};
`;

const Veil = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor.veil};
    &.visible{
        display: block;
        z-index: -1;
    }
`;

function Header({ handleScrollToSection }) {
    const [menuDeployed, setMenuDeployed] = useState(false);

    const handleClickMenuIcon = () => {
        setMenuDeployed(prev => !prev);
    };

    return (
        <Container>
            <MenuIconContainer onClick={handleClickMenuIcon}>
                <MenuIcon></MenuIcon>
            </MenuIconContainer>
            <Title>MATIASGUZLOP.DEV</Title>
            <MenuContent className={menuDeployed && 'deployed'}>
                <li
                    onClick={() => {
                        handleScrollToSection("matias");
                        handleClickMenuIcon();
                    }}
                >Matías Guzmán</li>
                <li
                    onClick={() => {
                        handleScrollToSection("about");
                        handleClickMenuIcon();
                    }}
                >About</li>
                <li
                    onClick={() => {
                        handleScrollToSection("projects");
                        handleClickMenuIcon();
                    }}
                >Projects</li>
                <li
                    onClick={() => {
                        handleScrollToSection("contact");
                        handleClickMenuIcon();
                    }}
                >Contact</li>
            </MenuContent>
            <Veil className={menuDeployed && 'visible'} onClick={handleClickMenuIcon}></Veil>
        </Container>
    );
}

export default Header;