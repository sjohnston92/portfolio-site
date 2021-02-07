
import React from 'react';
import styled from "styled-components";
import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";


const Footer = () => (
<Wrapper>
  <SocialBox>
   CONNECT WITH ME
    <IconBox>
      <FaGithub style={{margin:'10px'}}/>  
      <FaLinkedin style={{margin:'10px'}}/>
      <FaFacebook style={{margin:'10px'}}/>
    </IconBox>
  </SocialBox>
</Wrapper>
)


const Wrapper = styled.div`
  background-color:white;
  width: 100%;
  height: 100px;
  bottom: 0;
`;

const SocialBox = styled.div`
  margin-right:5%;
  padding-top: 2.5%;
  text-align: end;
  justify-content: center;
`;
const IconBox = styled.div`
margin-right:.25%;
letter-spacing: 100px;
align-content: space-between;
`;

export default Footer;