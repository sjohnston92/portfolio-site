import React from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Contact = () => {




  return (
    <ContactDiv>
      <ContactText>
        contact<SinglePeriod>.</SinglePeriod>
      </ContactText>
      <ArrowLeft to="/"/>
    </ContactDiv>
  )
}

const SinglePeriod = styled.span`
color: white ;
`;


const ContactDiv = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background: linear-gradient(to left, #f6ae2d 0%, #f6ae2d 50%, white 50%, white 100%);
`
;
const FormContainer = styled.div`
display:flex;
border-radius: 50%;
justify-content:center;
background: linear-gradient(to right, #f6ae2d 0%, #f6ae2d 50%, white 50%, white 100%);
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


const ArrowLeft = styled(Link)`
border: solid #f6ae2d;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
`;

export default Contact;