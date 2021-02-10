import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Filter from '../components/Filter'
import ProjectDisplay from '../pages/ProjectDisplay'
import DesignWork from '../pages/DesignWork'
import DeveloperWork from '../pages/DeveloperWork'

//image display
import BrewDaddyProfile from '../images/BrewDaddyProfile.png'
import GnarShare from '../images/GnarShare.png'
import MacPage from '../images/MACHomePage.png'
import BumskiPage from '../images/bumskis.png'

//thumbnails
import BrewDaddy from '../images/thumbnails/Brew_Daddy.jpg'
import Bumski from '../images/thumbnails/bumskiLogo.png'
import Mac from '../images/thumbnails/maclogo.png'
import Gnar from '../images/thumbnails/gnars.png'

const ShowCase = () => {

  const [selection,setSelection] = useState({value:"empty"})
  

  const [designWorks,setDesignWorks] = useState([
    {name:"Titan Seed Genetics",thumbnail:'',  image:"Picture I drew for them", body:"I designed the Logo for a small start up Seed Company"},
    {name:"Little River Farm",thumbnail:"placeholder",  image:"Picture I drew for them", body:"I designed the Logo for a small small aquaponic farm "}
    ])
  
  const [developerWorks, setDeveloperWorks] = useState([
    {id: 1,name:"BrewDaddy", thumbnail:BrewDaddy, image:BrewDaddyProfile, body:"BrewDaddy is the ultimate coffee navigation app! Find coffee shops in your area and ",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 2,name:"BumSkis", thumbnail:Bumski,image:BumskiPage, body:"Braddy is a ",plink:"Site has not gone live yet", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 3,name:"Macendonian Arts Council",thumbnail:Mac, image:MacPage, body:"BrewDaddy is a ",plink:"Site has not gone live yet", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 4,name:"GnarShare",thumbnail:Gnar, image:GnarShare, body:"Fart is a ",plink:"https://gnar-share.herokuapp.com/", repo:"https://github.com/sjohnston92/GNARShare"},
  ])

  const handleClick = (info) =>{
    setSelection(info)
    console.log(selection)
  }

  const  renderSelection = () => {

  }


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
        <DeveloperWork key={developerWork.id} developer={developerWork} handleClick={handleClick}/>
      )
    })
  }


  return (
    <AboutDiv>
      <PortText>
        portfolio<SinglePeriod>.</SinglePeriod>
      </PortText>
      <Row>
        <Col>
        <ProjectDisplay selection={selection}/>
        </Col>
        <Col>
        <Filter developerWorks={developerWorks} renderDesinWork={renderDesinWork} designWorks={designWorks} renderDeveloperWork={renderDeveloperWork} setSelection={setSelection}/>
        </Col>
      </Row>
      <div>
      You can always go checkout more of my work on git hub
      </div>
      <ArrowBox >
      <ArrowDown to="/"/>
      </ArrowBox>
     
    </AboutDiv>
  )
}

const SinglePeriod = styled.span`
color: white ;
`;


const AboutDiv = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background: linear-gradient(to bottom, #4ba3c3 0%, #4ba3c3 25%, white 25%, white 100%);
`
;

const PortText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:5%;
font-size: 100px;
line-height: 80%;
letter-spacing: -5px;
justify-content:center;
margin-top:5%;
`;


const ArrowBox = styled.p`
color: #4ba3c3 ;
text-align:center;
line-height: -1800%;
`;



const ArrowDown = styled(Link)`
-moz-transition: all .5s ease-in;
-o-transition: all .5s ease-in;
-webkit-transition: all .5s ease-in;
transition: all .5s ease-in;
border: solid #4ba3c3;
width:100px;
height: 100px;
border-width: 0 20px 20px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
&:hover {
  border: solid #ba324f;
  border-width: 0 20px 20px 0;
}
`;


export default ShowCase;