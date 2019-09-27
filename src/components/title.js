import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 75%;
    margin: auto;
    text-align: center;
`;

const H1Wrap = styled.h1`
    font-size: 4.3rem;
    color: black;
    padding-right: 2%;
`;

const Title = ({title})=>{

    return(
        <WrapperDiv>
            <H1Wrap>{title}</H1Wrap>
        </WrapperDiv>
    )

}

export default Title;