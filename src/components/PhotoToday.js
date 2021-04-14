import React from 'react'


const PhotoToday = (props => {
    const {photo} = props;
    return (
        <img src={photo} alt='NASA Photo of the Day'></img>
    )
})

    
export default PhotoToday;

