import React from 'react'
import styled from 'styled-components'


const ProjectDisplay = ({selection}) =>{
return(
  <DisplayWindow>
    <h1>{selection.name}</h1>
    <ImageDisplay src={selection.image}/>
    <h5>{selection.body}</h5>
    <h6>{selection.plink}</h6>
    <h6>{selection.repo}</h6>
</DisplayWindow>
)
}


const ImageDisplay = styled.img`
display:flex;
align-self:center;
height: 200px;
`;

const DisplayWindow = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
}`


export default ProjectDisplay