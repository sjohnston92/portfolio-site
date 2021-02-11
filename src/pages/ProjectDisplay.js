import React from 'react'
import styled from 'styled-components'
import {FaGithub} from "react-icons/fa";


const ProjectDisplay = ({selection}) =>{
return(
  <>
    <DisplayWindow>
      <h2>{selection.name}</h2>
      <ImageDisplay src={selection.image}/>
      <p>{selection.body}</p>
      {selection.plink == "" ?
          "This site has not gone live yet"
          :
         <a href={selection.plink}target="_blank">Live site for {selection.name}</a>
        }
    <a href={selection.repo} target="_blank"><FaGithub/> GitHub reposistory for {selection.name}</a>
</DisplayWindow>
</>
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