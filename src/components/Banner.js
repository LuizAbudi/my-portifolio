import React, { useState, useEffect, useCallback } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img2.svg'

const Banner = () => {

  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(100 - Math.random() * 100)
  const period = 2000;

  const tick = useCallback(() => {

    const toRotate = ['Web Developer', 'Front-End Developer', 'Computer Science Student'];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100 - Math.random() * 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }, [loopNum, isDeleting, text, period])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);


    return () => {
      clearInterval(ticker);
    }
  }, [text, delta, tick])

  return (
    <section className="banner" id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Bem vindo ao meu Portifólio</span>
            <h1>{`Olá, Sou o Luiz Gustavo `}<span className='wrap'>{text}</span></h1>
            <p>Olá! Meu nome é Luiz Gustavo, e sou um estudante de Programação e Ciências da Computação. Desde o momento em que escrevi minha primeira linha de código, fiquei fascinado pelo poder e pela capacidade de transformação da tecnologia. Estou empenhado em compreender não apenas os aspectos técnicos da programação, mas também em descobrir como posso usar a tecnologia para solucionar desafios do mundo real.</p>
            <button onClick={() => window.open('https://www.linkedin.com/in/luiz-gustavo-pasini-abudi-b60896241/', '_blank')} className='btn'>Contate-me <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5} className='text-center'>
            <img src={headerImg} alt='Headder Img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner