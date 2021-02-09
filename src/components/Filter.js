import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {Row,Col} from 'react-bootstrap'
import DesignWork from '../pages/DesignWork'
import DeveloperWork from '../pages/DeveloperWork'

import BrewDaddy from '../images/thumbnails/Brew_Daddy.jpeg'
import Bumski from '../images/thumbnails/bumskiLogo.png'
import Mac from '../images/thumbnails/maclogo.png'
import Gnar from '../images/thumbnails/gnars.png'


const Filter = () => {
    const [design,setDesign] = useState(false)

    const [designWorks,setDesignWorks] = useState([
      {name:"Titan Seed Genetics",thumbnail:'',  image:"Picture I drew for them", body:"I designed the Logo for a small start up Seed Company"},
      {name:"Little River Farm",thumbnail:"placeholder",  image:"Picture I drew for them", body:"I designed the Logo for a small small aquaponic farm "}
      ])
    
    const [developerWorks, setDeveloperWorks] = useState([
      {name:"BrewDaddy", thumbnail:BrewDaddy, image:"Picture I drew for them", body:"BrewDaddy is a ",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
      {name:"BumSkis", thumbnail:Bumski,image:"Picture I drew for them", body:"BrewDaddy is a ",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
      {name:"Macendonian Arts Council",thumbnail:Mac, image:"Picture I drew for them", body:"BrewDaddy is a ",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
      {name:"GnarShare",thumbnail:Gnar, image:"Picture I drew for them", body:"BrewDaddy is a ",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
    ])




    const renderDesinWork = () =>{
      return designWorks.map( designWork =>{
        return(
          <DesignWork key={designWork.id} designWork={designWork} />
        )
      })
    }

    const renderDeveloperWork = () =>{
      return developerWorks.map( developerWork =>{
        return(
          <DeveloperWork key={developerWork.id} developer={developerWork} />
        )
      })
    }



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