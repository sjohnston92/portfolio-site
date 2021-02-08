import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {Row,Col} from 'react-bootstrap'

const About = () => {




  return (
    <AboutDiv>
      <AboutText>
        about<SinglePeriod>.</SinglePeriod>
      </AboutText>
      <Row>
       <Col xs={6}>
         <ImageBox>
       <StyledImage />
        </ImageBox>
       </Col>
       <Col xs={4}>
         <DescText>
          Hey, my name is Simon Johnston. I'm a Web Developer and Designer.
          I mainly work with small bussiness and start-ups helping them solve complicated issues and design.
          
          <br />
          <br />
          Below is my current résumé
        </DescText>
       </Col>
       <Col xs={2}>
        <ArrowRight to="/"/>
      </Col>
   
     </Row>
    </AboutDiv>
  )
}


const StyledImage = styled.div`
  display:flex;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

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


const ImageBox = styled.div`
display:flex;
justify-content:center;

`
;


const DescText = styled.p`
color:white;
font-family: 'Roboto', sans-serif;
margin:10%;
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