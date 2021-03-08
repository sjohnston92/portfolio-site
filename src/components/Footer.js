
import React from 'react';
import styled from "styled-components";
import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import {Link} from 'react-router-dom'


const Footer = () => (
<Wrapper>
  <SocialBox>
   CONNECT WITH ME
    <IconBox>
      <StyledLink href="https://github.com/sjohnston92" target="_blank">
        <FaGithub style={{margin:'10px'}}/>  
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/simoncjohnston/" target="_blank">
        <FaLinkedin style={{margin:'10px'}}/>
      </StyledLink>
      <StyledLink href="https://www.facebook.com/simon.johnston.7" target="_blank">
      <FaFacebook style={{margin:'10px'}}/>
      </StyledLink>
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

const StyledLink = styled.a`
color:black;
&:hover {
  color: grey;

`

export default Footer;