import React,{useState} from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {Row,Col} from 'react-bootstrap'


const DesignWork = ({designWork}) => {

  return (
    <>
    <Row>
      <Col>
      {designWork.thumbnail}
      </Col>
      <Col>
      {designWork.name}
      </Col>
    </Row>
    </>
  )
}

export default DesignWork
