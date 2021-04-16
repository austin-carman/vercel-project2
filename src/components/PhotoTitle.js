import React from 'react'
import styled from 'styled-components'


const StyleHeader = styled.header `
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    height: 30vh;
    div {
        width: 10%;
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-right: 1%;
    }

    h1 {
       color: ${pr => pr.theme.primaryColor};
       font-size: 4rem;
    }
    a{
        font-size: 1.2rem;
        color: ${pr => pr.theme.primaryColor};

        :hover{
            color: ${pr => pr.theme.secondaryColor};
        }
    }
`

const Heading = (props => {
    return (
        <>
            <StyleHeader>
                <div>
                    <img src='../favicon.ico' alt='NASA logo'></img>
                </div>
                <h1>NASA Photo of the Day</h1>
                <nav>
                    <a href='https://www.nasa.gov/'>NASA Home</a>
                   <a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html' >Image Gallery</a>
                </nav>
            </StyleHeader>
        </>
    )
})

    
export default Heading;

