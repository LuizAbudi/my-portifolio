import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () => {

  const myProjects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      imgUrl: projImg1,
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      imgUrl: projImg2,
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      imgUrl: projImg3,
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>Alguns dos meus projetos</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Project 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Project 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Project 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      myProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      myProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      myProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt='colorSharp' className='background-image-right' />
    </section>
  )
}

export default Projects