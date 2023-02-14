import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Img from '../assets/img/soft.jpg'
import ProjectCard from './ProjectCard'
import bg3 from '../assets/img/bg3.jpg'

function Projects() {

    const projects = [
        {
            title: 'Whatsapp CLone',
            description: 'Design and Develop',
            imgUrl: Img,
            gitUrl: 'https://github.com/blackmile'
        },
        {
            title: 'Whatsapp CLone',
            description: 'Design and Develop',
            imgUrl: Img,
            gitUrl: 'https://github.com/blackmile'
        },
        {
            title: 'Whatsapp CLone',
            description: 'Design and Develop',
            imgUrl: Img,
            gitUrl: 'https://github.com/blackmile'
        },
        {
            title: 'Whatsapp CLone',
            description: 'Design and Develop',
            imgUrl: Img,
            gitUrl: 'https://github.com/blackmile'
        },
    ]

  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
              <Col>
                <h2>Projects</h2>
                <p> this will include all my projects both personal and team projects i have worked on </p>
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                  <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab' >
                    <Nav.Item>
                      <Nav.Link eventKey='first'>Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='third'>Tab three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>one</Tab.Pane>
                    <Tab.Pane eventKey='third'>two</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>  
            </Row>
        </Container>
        <img className='background-image-right' src={bg3} alt={''} />
    </section>
  )
}

export default Projects