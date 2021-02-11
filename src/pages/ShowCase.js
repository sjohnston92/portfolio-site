import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import ProjectDisplay from '../pages/ProjectDisplay'
import DesignWork from '../pages/DesignWork'
import DeveloperWork from '../pages/DeveloperWork'
import {FaGithub} from "react-icons/fa";
import { SwitchTransition, CSSTransition } from "react-transition-group";


//image display
import BrewDaddyProfile from '../images/BrewDaddyProfile.png'
import GnarShare from '../images/GnarShare.png'
import MacPage from '../images/MACHomePage.png'
import BumskiPage from '../images/bumskis.png'
import ProjectDis from '../images/projectdisplay.png'

//thumbnails
import BrewDaddy from '../images/thumbnails/Brew_Daddy.jpg'
import Bumski from '../images/thumbnails/bumskiLogo.png'
import Mac from '../images/thumbnails/maclogo.png'
import Gnar from '../images/thumbnails/gnars.png'

const ShowCase = () => {

  const [state, setState] = useState(false);
  const [selection,setSelection] = useState({value:"empty"})
  

  const [designWorks,setDesignWorks] = useState([
    {name:"Titan Seed Genetics",thumbnail:'',  image:"Picture I drew for them", body:"I designed the Logo for a small start up Seed Company"},
    {name:"Little River Farm",thumbnail:"placeholder",  image:"Picture I drew for them", body:"I designed the Logo for a small small aquaponic farm "}
    ])
  
  const [developerWorks, setDeveloperWorks] = useState([
    {id: 1,name:"BrewDaddy", thumbnail:BrewDaddy, image:BrewDaddyProfile, body:"BrewDaddy is the coffee navigation application to help find perfect balance of a good cup of coffee and great work/study enviroment",plink:"https://brew-daddy.herokuapp.com/", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 2,name:"BumSkis", thumbnail:Bumski,image:BumskiPage, body:"Bumskis is an application where you can rent, buy, and sell your winter gear and find it all at your next ski vacation",plink:"", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 3,name:"Macendonian Arts Council",thumbnail:Mac, image:MacPage, body:"Macendonian Arts Council is a non-profit dedicated to the promotion and affirmation of Macedonian culture",plink:"", repo:"https://github.com/ZaneN8/brew-daddy"},
    {id: 4,name:"GnarShare",thumbnail:Gnar, image:GnarShare, body:"GnarShare is a ski- ride share application built to help decongetion in the wasatch canyons. This application won 1st in a hackathon and built in less then 6 hours ",plink:"https://gnar-share.herokuapp.com/", repo:"https://github.com/sjohnston92/GNARShare"},
  ])

  const handleClick = (info) =>{
    setSelection(info)
    setState(!state)
    console.log(selection)
  }

  const renderDesinWork = () =>{
    return designWorks.map( designWork =>{
      return(
        <DesignWork key={designWork.id} designWork={designWork} />
      )
    })
  }


  const backgroundChanger = () => {
   return selection.value == 'empty' ? "": {color:'red'}
     
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
        <SwitchTransition>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
          >
        { selection.value == 'empty' ?
        <PlacerText url={ProjectDis}>
          project
          <br />
          viewer
        </PlacerText>
        :
        <ProjectDisplay selection={selection}/>
          } 
           </CSSTransition>
          </SwitchTransition>
        </Col>
        <Col>
        <ProjectText>contributed projects </ProjectText>
        <div>
            {renderDeveloperWork()}
        </div>
        <Row >
          <Col>
          <GitText>
          <a href="https://github.com/sjohnston92?tab=overview&from=2021-02-01&to=2021-02-10" ><p>Checkout more on my GitHub<FaGithub style={{marginBottom:'5px'}}/></p></a>
          </GitText>
          </Col>
          </Row>
        </Col>
      </Row>
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


const PlacerText= styled.div`
display:flex;
align-self:center;
justify-content:center;
flex-direction: column;
text-align:center;
font-family: 'Montserrat', sans-serif;
font-size: 50px;
margin-top: 25%;
background-image: url(${(props) => props.url});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`
;


const ProjectText= styled.div`
display:flex;
color: #4ba3c3 ;
justify-content:center;
flex-direction: column;
text-align:center;
font-family: 'Montserrat', sans-serif;
font-size: 30px;
text-decoration: underline;

`
;


const GitText= styled.div`
display:flex;
justify-content:center;
flex-direction: column;
text-align:center;
font-family: 'Roboto', sans-serif;
font-size: 15px;
margin:5%;
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