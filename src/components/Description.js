import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.p `
    width: 75%;
    margin: 3% auto;
    text-align: left;
    font-size: 1.4rem;

`

const Description = (props => {
    const {explanation, copyRight} = props;
    return (
        <>
            <StyledDescription className='copyright'>{copyRight ? `Copyright: ${copyRight}` : ''}</StyledDescription>
            <StyledDescription>{explanation}</StyledDescription>
        </>
    )
})

    
export default Description;

