import React from 'react';
import styled from 'styled-components';

const ImgWrap = styled.img`
    max-width: 85%;
    max-height: auto;
    padding: 5%;`;

const Media = ({type, url})=>{

    console.log(url);
    return(

        (type === 'image' ?  
            <ImgWrap src={url} className="img"/> : 
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="80%"
                height="400"
                src={url}>
            </iframe>
        )
    )
}

export default Media;