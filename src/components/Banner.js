import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/headerImg.svg'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Engineer', 'Cloud DevOps Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick()
      }, delta);
    
      return () => {
        clearInterval(ticker)
      }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }
    
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7} >
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>{`Hi I'm Stanley a `} <span className='wrap'> {text} </span></h1>
                    <p>this was supposed to be a an introduction and i will defintely write about my motivations and passion for choosing to be a software engineer, thanks for reading that!! now 😁👇🏿</p>
                    <button onClick={() => console.log('connect')} > let's connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5} >
                    <img src={headerImg} alt="header img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner