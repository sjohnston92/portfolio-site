import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {Row,Col} from 'react-bootstrap'
import Simon from '../images/simon.jpeg'
import {SiRuby,SiReact,SiPostgresql,SiJavascript,SiBootstrap,SiRails,SiHtml5,SiCss3} from "react-icons/si";

const About = () => {




  return (
    <AboutDiv>
      <AboutText>
        about<SinglePeriod>.</SinglePeriod>
      </AboutText>
      <Row>
        <Col>
        <ImageBox>
        <StyledImage url={Simon}/>
        </ImageBox>
        </Col>
       

        <Col>
        <DescText>
          <SubHeaderText>bio</SubHeaderText>
          Hey my name is Simon Johnston. I'm a passionate full stack developer who's expierance is in lifting indivuals and small businesses up to achieve there goals through web and mobile development.
          <br />
          <SubHeaderText>skills</SubHeaderText>
          <IconBox>
          <SiJavascript/><SiReact/><SiRuby/><SiRails/><SiPostgresql/><SiHtml5/><SiCss3/> <SiBootstrap/>
          </IconBox>
        </DescText>
        </Col>
       <div style={{display:'flex',justifyContent:'flex-end'}}>
        <ArrowRight to="/"/>
      </div>

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
justify-content:space-between;
flex-direction: column;
background: linear-gradient(to left, #175676 0%, #175676 50%, white 50%, white 100%);
`
;


const ImageBox = styled.div`
display:flex;
justify-content:center;

`
;

const IconBox = styled.div`
display:flex;
justify-content:space-around;
font-size: 30px;

`
;

const SubHeaderText = styled.h3`
text-align:center;
font-family: 'Montserrat', sans-serif;
`


const DescText = styled.p`
color:#175676;
background: white;
padding: 20px;
border:  #175676 solid 10px;
border-radius: 15px;
font-family: 'Roboto', sans-serif;
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
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
display:flex;
align-self: flex-end;
margin-right: 25px;
border: solid white;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
margin-bottom: 50px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
&:hover {
  border: solid #ba324f;
  border-width: 0 20px 20px 0;
}
`;


export default About;