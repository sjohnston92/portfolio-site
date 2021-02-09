import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import {FaEnvelope}from "react-icons/fa";


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
      <Col>
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
        <button type="submit" disabled={serverState.submitting}>
          <FaEnvelope /> Submit
        </button>
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
background: linear-gradient(to left, #f6ae2d 0%, #f6ae2d 50%, white 50%, white 100%);
`
;
const FormContainer = styled.div`
display:flex;
text-align:center;
flex-direction:column;
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
border: solid #f6ae2d;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
`;



const StyledForm = styled.form`
font-family: 'Roboto', sans-serif;
background: white;
margin-bottom: 20px;
margin-right: 20px;
border-radius: 10px;
`;



const StyledLabel = styled.label`
background: white;
font-family: 'Montserrat', sans-serif;
border-radius: 10px;
font-size: 20px;
`;


export default Contact;