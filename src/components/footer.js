import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    margin: auto;
`;

const H1Wrap = styled.h1`
    text-align: left;
    font-size: 1rem;
    color: midnightblue;
    padding-left: 45%;
    padding-top: 1%;
    padding-bottom: 1%;
`;

const Footer = ({copy})=>{
    return(

        (copy === undefined ? 
        <WrapperDiv>
            <H1Wrap> Copyright: NASA</H1Wrap>
        </WrapperDiv> : 
        <WrapperDiv>
            <H1Wrap> Copyright: {copy}</H1Wrap>
        </WrapperDiv>
    )
    )
}

export default Footer;