import React from "react"
import styled from 'styled-components'
import TextLoop from "react-text-loop";
import Navigator from "../components/Navigator"
import Footer from "../components/Footer"

const Home = () => {


  return (
    <>
    <Lander>
      <IntroText>
        <span>
        hey 
        <br/>
        there<SinglePeriod>.</SinglePeriod>
        </span>
      </IntroText>
      <NameText>
        i'm Simon Johnston a [ 
          <TextLoop
          interval="1500"
          > 
            <CareerText > Web Developer </CareerText>
            <CareerText> UX Designer </CareerText>
            <CareerText> Graphic Designer </CareerText>
          </TextLoop>]
      </NameText>
      <FilterBox >
        <Navigator/>
      </FilterBox>

    </Lander>
    <Footer />
    </>
   

  )
}



const Lander = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background: linear-gradient(to right, #ba324f 0%, #ba324f 50%, white 50%, white 100%);
`;


const IntroText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
margin:5%;
font-size: 150px;
line-height: 80%;
letter-spacing: -10px;
justify-content:center;
margin-top:5%;

`;

const SinglePeriod = styled.span`
color: #ba324f ;
`;


const CareerText = styled.span`
color: #ba324f ;
font-family: 'Roboto', sans-serif;
width:2000px;
letter-spacing: 3px;
padding:2px;
`;


const NameText = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 100%;
letter-spacing: -2px;
justify-content:center;
`;



const FilterBox = styled.div`
display: flex;
justify-content: space-around;
margin:2.5%;
`;




export default Home;