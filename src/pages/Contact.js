import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import {FaEnvelope,FaLinkedin, FaFacebook}from "react-icons/fa";


const Contact = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mgepqqya",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };


  return (
    <ContactDiv>
      <ContactText>
        contact<SinglePeriod>.</SinglePeriod>
      </ContactText>
      <Row>
      <Col>
      <ArrowLeft to="/"/>
      </Col>
      <Col xs={4}>
      <StyledContactText>
      If you want to reach out just fill out the this short form. 
      You could also reach out to me on LinkedIn & Facebook
      </StyledContactText>
      <IconBox>
      <a href="https://www.linkedin.com/in/simoncjohnston/">
      <FaLinkedin/> 
      </a>
      <a href="https://www.facebook.com/simon.johnston.7">
      <FaFacebook />
      </a>
      </IconBox>
      </Col>
      <Col xs={6}>
      <FormContainer>
      <StyledForm onSubmit={handleOnSubmit}>
        <div>
        <StyledLabel htmlFor="email">email<span style={{color:'#f6ae2d'}}>:</span></StyledLabel>
        <br/>
        <input id="email" type="email" name="email" required />
        </div>
        <div>
        <StyledLabel htmlFor="message">message<span style={{color:'#f6ae2d'}}>:</span></StyledLabel>
        <br/>
        <textarea id="message" name="message"></textarea>
        </div>
        <div>
        <StyledButton  color="white" type="submit" disabled={serverState.submitting}>
          <FaEnvelope /> Submit
        </StyledButton>
        </div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </StyledForm>
      </FormContainer>
      </Col>
      </Row>
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
height:540px;
background: linear-gradient(to left, #f6ae2d 0%, #f6ae2d 50%, white 50%, white 100%);
`
;
const FormContainer = styled.div`
display:flex;
text-align:center;
flex-direction:column;
`
;



const IconBox = styled.div`
display:flex;
text-align:center;
font-size: 40px;
justify-content:space-around;
`
;
const StyledContactText = styled.p`
margin-top: 15%;
font-family: 'Roboto', sans-serif;
`
;
const ContactText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:2.5%;
font-size: 100px;
line-height: 80%;
letter-spacing: -5px;
justify-content:center;
margin-top:10%;
`;


const ArrowLeft = styled(Link)`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
border: solid #f6ae2d;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
&:hover {
  border: solid #ba324f;
  border-width: 0 20px 20px 0;
}
`;



const StyledForm = styled.form`
font-family: 'Roboto', sans-serif;
background: white;
margin-bottom: 20px;
margin-right: 15px;
border-radius: 10px;
`;



const StyledLabel = styled.label`
background: white;
font-family: 'Montserrat', sans-serif;
border-radius: 10px;
font-size: 20px;
`;


const StyledButton = styled.button`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
text-decoration:none;
font-family: 'Roboto', sans-serif;
text-align:center;
margin-top:5px;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom 10px;
text-transform: uppercase;
color: white;
background: #f6ae2d;
border: 5px solid white;
border-radius:30px;
letter-spacing:10px;
&:hover {
  color: #f6ae2d;
  background: ${props => props.color};
}`

export default Contact;