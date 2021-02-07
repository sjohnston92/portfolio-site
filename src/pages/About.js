import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"

const About = () => {




  return (
    <AboutDiv>
      <AboutText>
        about<SinglePeriod>.</SinglePeriod>
      </AboutText>
      <ArrowRight to="/"/>
    </AboutDiv>
  )
}

const SinglePeriod = styled.span`
color: white ;
`;


const AboutDiv = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background: linear-gradient(to left, #175676 0%, #175676 50%, white 50%, white 100%);
`
;


const ArrowDiv = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background: linear-gradient(to left, #175676 0%, #175676 50%, white 50%, white 100%);
`
;

const AboutText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:5%;
font-size: 100px;
line-height: 80%;
letter-spacing: -5px;
justify-content:center;
margin-top:10%;
`;


const ArrowRight = styled(Link)`
display:flex;
align-self: flex-end;
margin-right: 25px;
border: solid white;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
`;


export default About;