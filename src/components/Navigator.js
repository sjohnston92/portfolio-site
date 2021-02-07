import React from "react"
import {Link} from "react-router-dom"
import styled,{keyframes} from 'styled-components'



const Navigator = () => {
return(
<>
  <LinkBox>
    <Link to="/about">
     About
    </Link>
  </LinkBox>
  <LinkBox>
  <Link to="/showcase">
    Portfolio
  </Link>
  </LinkBox>
  <LinkBox>
  <Link to="/contact">
    Contact
  </Link>
  </LinkBox>
</>
  )

}

const NavBox = styled.div`
display: flex;
`;


const LinkBox = styled.div`
display:flex;
`;

export default Navigator