import React from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const About = () => {




  return (
    <AboutDiv>
      <ContactText>
        portfolio<SinglePeriod>.</SinglePeriod>
      </ContactText>
      
      <ArrowBox >
      <ArrowDown to="/"/>
      </ArrowBox>
     
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
background: linear-gradient(to bottom, #4ba3c3 0%, #4ba3c3 50%, white 50%, white 100%);
`
;

const ContactText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:5%;
font-size: 100px;
line-height: 80%;
letter-spacing: -5px;
justify-content:center;
margin-top:10%;
`;


const ArrowBox = styled.p`
color: #4ba3c3 ;
text-align:center;
line-height: -1800%;
`;



const ArrowDown = styled(Link)`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
border: solid #4ba3c3;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
&:hover {
  border: solid #ba324f;
  border-width: 0 20px 20px 0;
}
`;


export default About;