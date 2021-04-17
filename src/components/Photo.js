import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const StyledSection = styled.section `
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        font-size: 2.0rem;
        color: ${pr => pr.theme.secondaryColor}
    }
    p {
        font-size: 1.8rem;
    }
    img {
        width: 75%;
    }
`

const PhotoToday = (props => {
    const {heading, date, hdPhoto, media} = props;

    return (
        <StyledSection>
            <h2>{heading}</h2>
            <p>Date: {date}</p>
            <div className='media-container'>
                {hdPhoto ? 
                    <img src={hdPhoto} alt='NASA astrology'></img>
                    : <ReactPlayer url={media}/>
                }
            </div>
            
        </StyledSection>
    )
})

    
export default PhotoToday;

