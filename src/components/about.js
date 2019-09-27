import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    heigh: auto;
    background-color: lightgrey;
    margin: auto;
`;

const H2Wrap = styled.h2`
    font-size: 100%;
    color: navyblue;
    padding-left: 5%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
`;





const About = ({about})=>{
    return(
        <WrapperDiv>
            <H2Wrap>{about}</H2Wrap>
        </WrapperDiv>
    )
}

export default About;