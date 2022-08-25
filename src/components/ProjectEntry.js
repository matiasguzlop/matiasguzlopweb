import React from 'react';
import styled from 'styled-components';
import { sizeQueries, containerMaxWidth } from '../styles/constants';

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Entry = styled.div`
  border: 1px dashed ${props => props.theme.color.primary};
  border-radius: 20px;
  padding: 0 1em;
  box-sizing: border-box;
  color: ${props => props.theme.color.tertiary};
  padding-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 100%;
  &.single{
    margin: 1em auto;
    display: block;
    @media ${sizeQueries.md}{
      width: ${containerMaxWidth.md};
    }
    @media ${sizeQueries.lg}{
      width: ${containerMaxWidth.lg};
    }
  }
`;

const Body = styled.div`
  &.centered{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  a{
    color: inherit;
  }
  &>h2{
    margin-top: 1em ;
    margin-bottom: 0;
    display: inline-block;
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
    margin-top: 0.5em;
  }
`;

const Footer = styled.div`
  span{
    font-family: monospace;
    font-weight: lighter;
    opacity: 0.6;
  }
`;


function ProjectEntry({ children, resumeLink }) {
    const createHtmlBody = () => {
        return {
            __html: children.body
        };
    };
    return (
        resumeLink ?
            <Entry className="single">
                <Body className='centered'>
                    <h2 className='block'>
                        <a
                            href='https://drive.google.com/file/d/1Rp7_ht3VqSv8Pvu-AvcAfv30ND_QdMx6/view?usp=sharing'
                            target="_blank"
                            rel="noreferrer"
                        >Checkout my PDF resume ⬇️</a>
                    </h2>
                </Body>
            </Entry>
            :
            <Entry>
                <Body>
                    <h2>{children.title}</h2>
                    {children.url &&
                        <Link
                            rel="noreferrer"
                            href={children.url} target="_blank">
                            🔗
                        </Link>
                    }
                    <h5>{children.company}</h5>
                    <p dangerouslySetInnerHTML={createHtmlBody()}></p>
                </Body>
                {children.techs &&
                    <Footer>
                        <span>{children.techs}</span>
                    </Footer>
                }
            </Entry>
    );
}

export default ProjectEntry;