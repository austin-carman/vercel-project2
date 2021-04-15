import React from 'react'


const Description = (props => {
    const {explanation, copyRight} = props;
    return (
        <>
            <p>{copyRight ? `Copyright: ${copyRight}` : ''}</p>
            <p>{explanation}</p>
        </>
    )
})

    
export default Description;

