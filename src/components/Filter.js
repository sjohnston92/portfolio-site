import React,{useState} from "react"
import styled from 'styled-components'


const Filter = ({renderDesinWork,renderDeveloperWork}) => {
    const [design,setDesign] = useState(false)
  return (
    <>
    <FilterBox>
      <StyledButton onClick={()=> setDesign(false)}>
      Developer Work
      </StyledButton>
      <StyledButton onClick={()=> setDesign(true)}>
        Design Work
      </StyledButton>
    </FilterBox>
    { !design ?
     <Box>
      {renderDeveloperWork()}
    </Box> 
    :
    <Box>
      {renderDesinWork()}
    </Box> 
      }
    </>
  )
}




const StyledButton = styled.button`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
text-decoration:none;
font-family: 'Roboto', sans-serif;
width: 200px;
text-align:center;
margin-top:5px;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom 10px;
text-transform: uppercase;
color: white;
background: #4ba3c3;
border: 5px solid white;
border-radius:30px;
letter-spacing:5px;
&:hover {
  color: #4ba3c3;
  background: white;
}`


const FilterBox = styled.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
}`


const Box = styled.div`

font-family: 'Roboto', sans-serif;
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
}`


export default Filter;