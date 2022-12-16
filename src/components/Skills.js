import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg3 from '../assets/img/bg3.jpg'
import bg2 from '../assets/img/bg2.jpg'
import busi from '../assets/img/busi.jpg'
import cloud from '../assets/img/cloud.jpg'
import mobile from '../assets/img/mobile.jpg'
import soft from '../assets/img/soft.jpg'
import done from '../assets/img/done.svg'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              <p>this is the section where i would talk abiut my skill sets hope you enjoy it</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className='item'>
                  <img src={done} alt='' />
                  <h5>Software Engineer</h5>
                </div>
                <div className='item'>
                  <img src={done} alt='' />
                  <h5>Cloud DevOps Engineer</h5>
                </div>
                <div className='item'>
                  <img src={done} alt='' />
                  <h5>Mobile Speacialist</h5>
                </div>
                <div className='item'>
                  <img src={done} alt='' />
                  <h5>Tech Enthusiast</h5>
                </div>
                <div className='item'>
                  <img src={done} alt='' />
                  <h5>Business Owner</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={bg3} className='background-image-left' alt='' />
    </section>
  )
}

export default Skills