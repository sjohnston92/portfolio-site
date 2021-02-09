import React from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Filter from '../components/Filter'

const About = () => {




  return (
    <AboutDiv>
      <PortText>
        portfolio<SinglePeriod>.</SinglePeriod>
      </PortText>
      <Row>
        <Col>
        <h1>Project Name</h1>
        <h2>Project Image</h2>
        <h3>Project Desctiption</h3>
        <h3>Project link</h3>
        <h3>Project Repo</h3>
        </Col>
        <Col>
        <Filter />
        </Col>
      </Row>
      <div>
      You can always go checkout more of my work on git hub
      </div>
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
background: linear-gradient(to bottom, #4ba3c3 0%, #4ba3c3 25%, white 25%, white 100%);
`
;

const PortText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:5%;
font-size: 100px;
line-height: 80%;
letter-spacing: -5px;
justify-content:center;
margin-top:5%;
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