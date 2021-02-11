import React, {useState} from "react"
import {Link} from "react-router-dom"
import styled,{keyframes} from 'styled-components'
import {Row,Col} from "react-bootstrap"



const Navigator = () => {
  


return(
<>
  <Row style={{justifyContent:'center'}}>
    <Col>
    <div style={{justifyContent:'center', display:'flex'}}>
    <Link to="/about">
    <StyledButton color="#175676">About</StyledButton>
    </Link>
    </div>
    </Col>
    <Col>
    <div style={{justifyContent:'center', display:'flex'}}>
  <Link to="/showcase">
    <StyledButton color="#4ba3c3">Portfolio</StyledButton>
  </Link>
  </div>
  </Col>

  <Col>
  <div style={{justifyContent:'center', display:'flex'}}>
  <Link to="/contact">
   <StyledButton color="#f6ae2d">Contact</StyledButton>
  
  </Link>
  </div>
  </Col>
  </Row>
</>
  )

}

const LinkBox = styled.div`
display:flex;
padding: 2.5%;
`;

const StyledButton = styled.button`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
text-decoration:none;
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
top: 50%;
  left: 50%;
&:hover {
  background: ${props => props.color};;
}
`




export default Navigator