import React,{useState} from "react"
import styled from 'styled-components'
import {Row,Col} from 'react-bootstrap'


const DeveloperWork = ({developer}) => {

    return (
    <Selection>
      <Row>
        <Col align="center">
        <ThumbnailDiv>
          <ThumbNail url={developer.thumbnail}/>
        </ThumbnailDiv>
        </Col>
        <Col>
        <Text>
        {developer.name}
        </Text>
        </Col>
      </Row>
    </Selection>
    )
  }


const Text = styled.div`
font-family: 'Montserrat', sans-serif;
margin:.5%;
font-size: 15px;
justify-content:center;
align-self:center
margin:5%;
padding-top:8%;
text-align:center;
margin-right:10%;
`;

const ThumbnailDiv = styled.div`
margin-bottom:5%;
margin-top: 5%;
align-self:center
display:flex
text-align:center;
justify-content:center;
margin-left:20%;

`;
const ThumbNail = styled.div`
display:flex;
align-self:center;
height: 30px;
margin-top:10%;
background-image: url(${(props) => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;


const Selection = styled.div`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
border-radius: 10px;
cursor: pointer;
&:hover {
  color:  #4ba3c3;
}`
;

  

export default DeveloperWork
