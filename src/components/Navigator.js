import React from "react"
import {Link} from "react-router-dom"
import styled,{keyframes} from 'styled-components'



const Navigator = () => {
return(
<>
  <LinkBox>
    <Link to="/about">
    <StyledButton>About</StyledButton>
    </Link>
  </LinkBox>
  <LinkBox>
  <Link to="/showcase">
    <StyledButton>Portfolio</StyledButton>
  </Link>
  </LinkBox>
  <LinkBox>
  <Link to="/contact">
   <StyledButton>Contact</StyledButton>
  </Link>
  </LinkBox>
</>
  )

}

const LinkBox = styled.div`
display:flex;
padding: 2.5%;
`;

const StyledButton = styled.div`
font-family: 'Roboto', sans-serif;
text-align:center;
margin-top:5%;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom 10px;
text-transform: uppercase;
color: white;
background: #ba324f;
border: 5px solid white;
border-radius:30px;
letter-spacing:10px;
`




export default Navigator