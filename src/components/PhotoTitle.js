import React from 'react'


const PhotoTitle = (props => {
    const {heading, date} = props;
    return (
        <>
            <h2>{heading}</h2>
            <p>Date: {date}</p>
        </>
    )
})

    
export default PhotoTitle;

