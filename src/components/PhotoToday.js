import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section `
    text-align: center;
    
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
    const {heading, date, photo} = props;
    return (
        <StyledSection>
            <h2>{heading}</h2>
            <p>Date: {date}</p>
            <img src={photo} alt='NASA Photo of the Day'></img>
        </StyledSection>
    )
})

    
export default PhotoToday;

