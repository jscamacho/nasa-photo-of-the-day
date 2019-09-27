import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    margin: auto;
`;

const H1Wrap = styled.h1`
    font-size: 2rem;
    color: midnightblue;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
`;


const Date = ({date})=>{
    return(
        <WrapperDiv>
            <H1Wrap>Hello World,<br/>Date: {date} <br/> Today's Featured Picture is:</H1Wrap>
        </WrapperDiv>
    )
}

export default Date;